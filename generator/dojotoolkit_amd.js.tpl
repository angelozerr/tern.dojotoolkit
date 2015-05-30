(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  function flattenPath(path) {
    if (!/(^|\/)(\.\/|[^\/]+\/\.\.\/)/.test(path)) return path;
    var parts = path.split("/");
    for (var i = 0; i < parts.length; ++i) {
      if (parts[i] == "." || !parts[i]) parts.splice(i--, 1);
      else if (i && parts[i] == "..") parts.splice(i-- - 1, 2);
    }
    return parts.join("/");
  }

  function resolveName(name, data) {
    var excl = name.indexOf("!");
    if (excl > -1) name = name.slice(0, excl);

    var opts = data.options;
    var hasExt = /\.js$/.test(name);
    if (hasExt || /^(?:\w+:|\/)/.test(name))
      return name + (hasExt ? "" : ".js");

    var base = opts.baseURL || "";
    if (base && base.charAt(base.length - 1) != "/") base += "/";
    if (opts.paths) {
      var known = opts.paths[name];
      if (known) return flattenPath(base + known + ".js");
      var dir = name.match(/^([^\/]+)(\/.*)$/);
      if (dir) {
        var known = opts.paths[dir[1]];
        if (known) return flattenPath(base + known + dir[2] + ".js");
      }
    }
    return flattenPath(base + name + ".js");
  }
  
  function getInterface(name, data) {
    var module = infer.cx().definitions["dojotoolkit"][name];
    if (module) return module;
 
    if (name == "require") return getRequire(data);
    if (name == "module") return infer.cx().definitions["dojotoolkit"].module;

    if (data.options.override && Object.prototype.hasOwnProperty.call(data.options.override, name)) {
      var over = data.options.override[name];
      if (typeof over == "string" && over.charAt(0) == "=") return infer.def.parsePath(over.slice(1));
      if (typeof over == "object") {
        var known = getKnownModule(name, data);
        if (known) return known;
        var scope = data.interfaces[stripJSExt(name)] = new infer.Obj(null, stripJSExt(name));
        infer.def.load(over, scope);
        return scope;
      }
      name = over;
    }

    if (!/^(https?:|\/)|\.js$/.test(name))
      name = resolveName(name, data);
    name = flattenPath(name);

    var known = getKnownModule(name, data);

    if (!known) {
      known = getModule(name, data);
      data.server.addFile(name, null, data.currentFile);
    }
    return known;
  }
  
  function getKnownModule(name, data) {
    return data.interfaces[stripJSExt(name)];
  }

  function getModule(name, data) {
    var known = getKnownModule(name, data);
    if (!known) {
      known = data.interfaces[stripJSExt(name)] = new infer.AVal;
      known.origin = name;
    }
    return known;
  }

  var EXPORT_OBJ_WEIGHT = 50;

  function stripJSExt(f) {
    return f.replace(/\.js$/, '');
  }
  
  var path = {
    dirname: function(path) {
      var lastSep = path.lastIndexOf("/");
      return lastSep == -1 ? "" : path.slice(0, lastSep);
    },
    relative: function(from, to) {
      if (to.indexOf(from) == 0) return to.slice(from.length);
      else return to;
    },
    join: function(a, b) {
      if (a && b) return a + "/" + b;
      else return (a || "") + (b || "");
    },
  };
    
  infer.registerFunction("requireDojo", function(_self, args, argNodes) {
    var server = infer.cx().parent, data = server && server._dojotoolkit;
    if (!data || !args.length) return infer.ANull;

    var name = data.currentFile;
    var out = getModule(name, data);

    var deps = [], fn;
    if (argNodes && args.length > 1) {
      var node = argNodes[args.length == 2 ? 0 : 1];
      var base = path.relative(server.options.projectDir, path.dirname(node.sourceFile.name));
      if (node.type == "Literal" && typeof node.value == "string") {
        deps.push(getInterface(path.join(base, node.value), data));
      } else if (node.type == "ArrayExpression") for (var i = 0; i < node.elements.length; ++i) {
        var elt = node.elements[i];
        if (elt.type == "Literal" && typeof elt.value == "string") {
          if (elt.value == "exports") {
            var exports = new infer.Obj(true);
            deps.push(exports);
            out.addType(exports, EXPORT_OBJ_WEIGHT);
          } else {
            deps.push(getInterface(path.join(base, elt.value), data));
          }
        }
      }
    } else if (argNodes && args.length == 1 && argNodes[0].type == "FunctionExpression" && argNodes[0].params.length) {
      // Simplified CommonJS call
      var exports = new infer.Obj(true);
      deps.push(getInterface("require", data), exports);
      out.addType(exports, EXPORT_OBJ_WEIGHT);
      fn = args[0];
    }

    if (!fn) {
      fn = args[Math.min(args.length - 1, 2)];
      if (!fn.isEmpty() && !fn.getFunctionType()) fn = null;
    }

    if (fn) fn.propagate(new infer.IsCallee(infer.ANull, deps, null, out));
    else if (args.length) args[0].propagate(out);

    return infer.ANull;
  });

  
  tern.registerPlugin("dojotoolkit<%= version %>", function(server, options) {
    server._dojotoolkit = {
      interfaces: Object.create(null),
      options: options || {},
      currentFile: null,
      server: server
    };

    server.on("beforeLoad", function(file) {
      this._dojotoolkit.currentFile = file.name;
    });
    server.on("reset", function() {
      this._dojotoolkit.interfaces = Object.create(null);
      this._dojotoolkit.require = null;
    });
     return {
      defs : defs,
      passes: {completion: findCompletions,
               typeAt: findTypeAt}
    };
  });

  function findCompletions(file, query) {
    var wordEnd = tern.resolvePos(file, query.end);
    var callExpr = infer.findExpressionAround(file.ast, null, wordEnd, file.scope, "CallExpression");
    if (!callExpr) return;
    var callNode = callExpr.node;
    if (callNode.callee.type != "Identifier" || callNode.callee.name != "require" ||
        callNode.arguments.length < 1 || callNode.arguments[0].type != "ArrayExpression") return;
    var argNode = findNodeModule(callNode.arguments[0].elements, wordEnd);
    if (!argNode) return;
    var word = argNode.raw.slice(1, wordEnd - argNode.start), quote = argNode.raw.charAt(0);
    if (word && word.charAt(word.length - 1) == quote)
      word = word.slice(0, word.length - 1);
    var completions = completeModuleName(query, file, word);
    if (argNode.end == wordEnd + 1 && file.text.charAt(wordEnd) == quote)
      ++wordEnd;
    return {
      start: tern.outputPos(query, file, argNode.start),
      end: tern.outputPos(query, file, wordEnd),
      isProperty: false,
      isObjectKey: false,
      completions: completions.map(function(rec) {
        var name = typeof rec == "string" ? rec : rec.name;
        var string = JSON.stringify(name);
        if (quote == "'") string = quote + string.slice(1, string.length -1).replace(/'/g, "\\'") + quote;
        if (typeof rec == "string") return string;
        rec.displayName = name;
        rec.name = string;
        return rec;
      })
    };
  }
  
  function findNodeModule(argsNode, wordEnd) {
    for (var i = 0; i < argsNode.length; i++) {
      var argNode = argsNode[i];
      if (argNode.type == "Literal" && typeof argNode.value == "string" &&
          argNode.start < wordEnd && argNode.end > wordEnd) return argNode;
    }
  }
  
  function completeModuleName(query, file, word) {
    var completions = [];
    var cx = infer.cx(), server = cx.parent, data = server._dojotoolkit;
    var currentFile = null; //data.currentFile || resolveProjectPath(server, file.name);
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;

    function maybeSet(obj, prop, val) {
      if (val != null) obj[prop] = val;
    }
    
    function gather(modules) {
      for (var name in modules) {
        if (name == currentFile) continue;

        var moduleName = name; //resolveModulePath(name, currentFile);
        if (moduleName &&
            !(query.filter !== false && word &&
              (query.caseInsensitive ? moduleName.toLowerCase() : moduleName).indexOf(word) !== 0)) {
          var rec = wrapAsObjs ? {name: moduleName} : moduleName;
          completions.push(rec);

          if (query.types || query.docs || query.urls || query.origins) {
            var val = modules[name];
            infer.resetGuessing();
            var type = val.getType();
            rec.guess = infer.didGuess();
            if (query.types)
              rec.type = infer.toString(val);
            if (query.docs)
              maybeSet(rec, "doc", val.doc || type && type.doc);
            if (query.urls)
              maybeSet(rec, "url", val.url || type && type.url);
            if (query.origins)
              maybeSet(rec, "origin", val.origin || type && type.origin);
          }
        }
      }
    }

    if (query.caseInsensitive) word = word.toLowerCase();
    gather(cx.definitions.dojotoolkit);
    gather(data.modules);
    return completions;
  }
  
  function findTypeAt(_file, _pos, expr, type) {
    if (!expr) return type;
    var isStringLiteral = expr.node.type === "Literal" &&
       typeof expr.node.value === "string";
    var isRequireArg = !!expr.node.required;

    if (isStringLiteral && isRequireArg) {
      // The `type` is a value shared for all string literals.
      // We must create a copy before modifying `origin` and `originNode`.
      // Otherwise all string literals would point to the last jump location
      type = Object.create(type);

      // Provide a custom origin location pointing to the require()d file
      var exportedType;
      if (expr.node.required && (exportedType = expr.node.required.getType())) {
        type.origin = exportedType.origin;
        type.originNode = exportedType.originNode;
      }
    }

    return type;
  }
  
  var defs = <%= defs %>

});  
