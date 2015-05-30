(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
  if (typeof define == "function" && define.amd) return define(["exports"], mod); // AMD
  mod(root.DojoDetails2TernDef || (root.DojoDetails2TernDef = {})); // Plain browser env
})(this, function(exports) {
  "use strict";

  exports.generate = function(dojoApi, options) {
    var ternDef = createDef();
    visitApi(dojoApi, ternDef["!define"], options);
    return ternDef;
  };
  
  function createDef() {
    return {
      "!name": "dojotoolkit",
      "!define": {},
      require: {
        "!type": "fn(configuration?: ?, dependencies?: [string], callback?: fn()) -> !custom:requireDojo",
        "!doc": "require is used to configure the loader and load AMD modules."
      },
      define: {
        "!type": "fn(moduleId?: string, dependencies?: [string], factory?: fn()) -> !custom:defineDojo",
        "!doc": "define is very similar to require and is used to define AMD modules."
      }
    };
  }

  function visitApi(dojoApi, ternDef, options) {
    for ( var name in dojoApi) {
      var dojoItem = dojoApi[name];
      var ternItem = getTernItem(name, ternDef), ternClassOrProto = ternItem;
      if (dojoItem.classlike) {
        ternItem["!type"] = "fn()";
        ternClassOrProto = ternItem["prototype"] = {};
      } else if (dojoItem.type && dojoItem.type.toLowerCase() === 'function') {
        populateMethod(dojoItem, ternItem);
      }
      if (dojoItem.superclass) {
        ternClassOrProto["!proto"] = dojoItem.superclass + ".prototype"
      }
      if (dojoItem.summary) {
        //ternClassOrProto["!doc"] = dojoItem.summary;
      }
      if (dojoItem.properties) {
        visitProperties(dojoItem, ternItem);
      }      
      if (dojoItem.methods) {
        visitMethods(dojoItem, ternItem, name);
      }
    }
  }

  function getTernItem(name, ternDef) {
    var ternParentItem = ternDef, ternItem = null;
    var path = name, ternItem = ternParentItem[path];
    if (!ternItem) {
      ternItem = {};
      ternParentItem[path] = ternItem;
    }
    ternParentItem = ternItem;
    return ternItem;
  }

  function visitProperties(dojoItem, ternItem) {
    for (var i = 0; i < dojoItem.properties.length; i++) {
      var dojoProperty = dojoItem.properties[i];
      if (dojoProperty.name /* && !dojoProperty["private"] */) {
        var ternProperty = {};
        if (dojoProperty.scope === 'prototype') {
          if (!ternItem.prototype)
            ternItem.prototype = {};
          ternItem.prototype[dojoProperty.name] = ternProperty;
        } else {
          ternItem[dojoProperty.name] = ternProperty;
        }  
        if (dojoProperty.summary) {
          ternProperty["!doc"] = dojoProperty.summary;
        }
        if (dojoProperty.type && dojoProperty.type != 'Object') {
          ternProperty["!type"] = getTernType(dojoProperty.type)
        }
      }
    }
  }

  function visitMethods(dojoItem, ternItem, name) {
    for (var i = 0; i < dojoItem.methods.length; i++) {
      var dojoMethod = dojoItem.methods[i];
      if (dojoMethod.name && !dojoMethod["private"] && dojoMethod.name != "constructor") {
        var ternMethod = {};
        if (dojoMethod.scope === 'prototype') {
          if (!ternItem.prototype)
            ternItem.prototype = {};
          ternItem.prototype[dojoMethod.name] = ternMethod;
        } else {
          ternItem[dojoMethod.name] = ternMethod;
        }
        populateMethod(dojoMethod, ternMethod, name);
      }
    }
  }
  
  function populateMethod(dojoMethod, ternMethod, moduleName) {
    var type = getExtendedType(moduleName, dojoMethod.name);
    if (!type) {
      type = 'fn(';
      if (dojoMethod.parameters) {
        for (var j = 0; j < dojoMethod.parameters.length; j++) {
          var dojoParameter = dojoMethod.parameters[j], name = dojoParameter.name, optional = (dojoParameter.usage === 'optional');
          var ternType = dojoParameter.type ? getTernTypes(dojoParameter.type.split("|")) : getTernTypes(dojoParameter.types);
          if (j > 0)
            type += ', ';
          type += name;
          if (optional)
            type += '?';
          if (ternType) {
            type += ': ';
            type += ternType;
          }
        }
      }
      type += ')';
      var returnTypes = dojoMethod["returnTypes"];
      if (returnTypes) {
        for (var j = 0; j < returnTypes.length; j++) {
          var returnType = returnTypes[j];
          if (returnType && returnType.indexOf(' ') == -1) {
            var t = getTernType(returnType, null, true);
            if (t != '?') {
              type += ' -> ';
              type += t;
              break;
            }
          }
        }
      }
    }
    ternMethod["!type"] = type;
    if (dojoMethod.summary)
      ternMethod["!doc"] = dojoMethod.summary;
  }

  function getTernTypes(dojoTypes, dojoApi, isReturn) {
    if (!dojoTypes || dojoTypes.length == 0) return null;
    var type = "";
    for (var i = 0; i < dojoTypes.length; i++) {
      if (i > 0) type += "|";
      type += getTernType(dojoTypes[i], dojoApi);
    }
    return type;
  }
  
  function getTernType(dojoType, dojoApi, isReturn) {
    if (dojoType) {
      dojoType = dojoType.trim();
      if (endsWith(dojoType, "\"") || endsWith(dojoType, "?") || endsWith(dojoType, "*") || (!startsWith(dojoType, "function") && endsWith(dojoType, ")"))) 
        dojoType = dojoType.substring(0, dojoType.length -1);
      if (startsWith(dojoType, "\"") || startsWith(dojoType, "(")) dojoType = dojoType.substring(1, dojoType.length);
    }
    if (!dojoType || dojoType.indexOf('-') != -1 || dojoType.indexOf(' ') != -1 || dojoType === '[,'
        || dojoType === ',' || dojoType === 'any'|| dojoType === 'instance'|| dojoType === 'null') {
      // ex : attribute-name-string, data-store
      return '?';
    }

    if (dojoType.toLowerCase() === 'domnode') {
      dojoType = 'Node';
    } else if (dojoType.toLowerCase() === 'widget') {
      dojoType = 'dijit._Widget';
    } else if (dojoType.toLowerCase() === 'object' || dojoType.toLowerCase() === 'undefined') {
      return '?';
    }else {
      if (dojoType == 'function')  return "fn()";
      if (startsWith(dojoType, 'function')) return "fn()"; //dojoType.replace('function', 'fn'); 
      // ex : String||Object
      var index = dojoType.indexOf('|');
      if (index > 0) {
        dojoType = dojoType.substring(0, index);
      } else {
        // ex : Node:
        index = dojoType.indexOf(':');
        if (index > 0) {
          dojoType = dojoType.substring(0, index);
        } else {
          // ex : Number,
          index = dojoType.indexOf(',');
          if (index > 0) {
            dojoType = dojoType.substring(0, index);
          } else {
            // ex : Channel/resource
            index = dojoType.indexOf('/');
            if (index > 0) {
              dojoType = dojoType.substring(0, index);
            } else if (startsWith(dojoType, '?')) {
              // ex :?String
              dojoType = dojoType.substring(1, dojoType.length);
            } else if (startsWith(dojoType, "'")) {
              // ex : 'Deferred'
              dojoType = dojoType.substring(1, dojoType.length - 1);
            }
          }
        }
      }
    }

    // is array?
    var isArray = dojoType === 'array' || dojoType === 'Array';
    if (isArray) {
      dojoType = "";
    } else {
      index = dojoType.indexOf('[');
      if (index > 0) {
        dojoType = dojoType.substring(0, index);
        isArray = true;
      }
    }
    switch (dojoType.toLowerCase()) {
    case 'string':
      return formatType('string', isArray);
    case 'number':
    case 'int':
      return formatType('number', isArray);
    case 'boolean':
      return formatType('bool', isArray);
    case 'function':
      return "fn()";      
    default:
      return formatType(dojoType, isArray, true);
    }
  }

  function formatType(type, isArray, isInstance) {
    var t = "";
    if (isArray) {
      t += '[';
    }
    if (isInstance && type && type != 'string' && type != 'bool'
        && type != 'number' && type != '')
      t += '+';
    t += type;
    if (isArray) {
      t += ']';
    }
    return t;
  }

  function isAccess(yuiClassItem) {
    var access = yuiClassItem["access"];
    return access != 'private' && access != 'protected';
  }

  function visitClassItem(yuiClassItem, dojoApi, ternDef, options) {
    var moduleName = yuiClassItem["module"], className = yuiClassItem["class"], name = yuiClassItem["name"], isStatic = yuiClassItem["static"] === 1;
    var ternModule = getTernModule(moduleName, ternDef);
    var parent = null;
    if (className == 'YUI') {
      if (moduleName === 'yui') {
        parent = getTernClassOrPrototype(className, ternDef, dojoApi, isStatic,
            options);
      } else {
        parent = ternModule;
      }
    } else {
      parent = getTernClassOrPrototype(className, ternModule, dojoApi,
          isStatic, options);
    }

    var ternClassItem = {};
    parent[name] = ternClassItem;

    // !type
    var type = options.getType ? options.getType(moduleName, className, name,
        yuiClassItem) : null;
    if (!type)
      type = getType(yuiClassItem, dojoApi);
    if (type)
      ternClassItem["!type"] = type;
    // !effects
    var effects = options.getEffects ? options.getEffects(moduleName,
        className, name, yuiClassItem) : null;
    if (effects) {
      ternClassItem["!effects"] = [ effects ];
    }
    // !doc
    if (yuiClassItem.description)
      ternClassItem["!doc"] = yuiClassItem.description;
    // !url
    ternClassItem["!url"] = getURL(options.baseURL, className,
        yuiClassItem.itemtype, name);
  }

  function startsWith(str, prefix) {
    return str.slice(0, prefix.length) == prefix;
  }

  function endsWith(str, suffix) {
    return str.slice(-suffix.length) == suffix;
  }

  function getURL(baseURL, className, itemtype, name) {
    var url = baseURL;
    if (!endsWith(baseURL, '/')) {
      url += '/';
    }
    url += 'classes/';
    url += className;
    url += '.html';
    if (itemtype && name) {
      url += '#';
      url += itemtype;
      url += '_';
      url += name;
    }
    return url;
  }

  function getTernModule(moduleName, ternDef) {
    var name = moduleName.replace(/-/g, '_');
    var ternModule = ternDef["!define"][name];
    if (!ternModule) {
      ternModule = {};
      ternDef["!define"][name] = ternModule;
    }
    return ternModule;
  }

  function getTernClassOrPrototype(className, ternModule, dojoApi, isStatic,
      options) {
    var name = className.replace(/-/g, '_');
    var ternClass = ternModule[name];
    if (!ternClass) {
      ternClass = {};
      ternModule[name] = ternClass;
      var yuiClass = dojoApi.classes[className];
      if (yuiClass) {
        // !type
        var type = getType(yuiClass, dojoApi);
        if (type)
          ternClass["!type"] = type;
        // !proto
        if (yuiClass["extends"])
          ternClass["!proto"] = getClassName(yuiClass["extends"], dojoApi);
        // !doc
        if (yuiClass.description)
          ternClass["!doc"] = yuiClass.description;
        // !url
        ternClass["!url"] = getURL(options.baseURL, className);
      }
    }
    if (isStatic) {
      return ternClass;
    }
    if (!ternClass.prototype) {
      ternClass.prototype = {};
    }
    return ternClass.prototype;
  }

  function visitClass(dojoApi, ternDef, ternModule, yuiClass, className) {
    var ternClass = createTernClass(dojoApi, ternModule, yuiClass, className);

  }

  function createTernClass(dojoApi, ternModule, yuiClass, className) {
    var ternClass = {};
    ternModule[className] = ternClass;
    var type = getType(yuiClass, dojoApi);
    if (type)
      ternClass["!type"] = type;
    return ternClass;
  }

  function toTernName(yuiName) {
    var name = yuiName;
    name = name.replace(/-/g, '');
    var index = name.indexOf('*');
    if (index > 0)
      name = name.substring(0, index);
    // ex : prepend=false
    var index = name.indexOf('=');
    if (index > 0)
      name = name.substring(0, index);
    return name;
  }

  function getType(yuiClass, dojoApi) {
    var params = yuiClass.params, returnValue = yuiClass["return"], chainable = yuiClass["chainable"] === 1, isConstructor = yuiClass["is_constructor"] === 1, yuiItemtype = yuiClass["itemtype"], yuiType = yuiClass["type"];
    if (yuiItemtype === 'property') {
      return toTernType(yuiType, dojoApi, true);
    }

    var type = 'fn(';
    if (params) {
      for (var i = 0; i < params.length; i++) {
        var param = params[i], name = toTernName(param.name);
        if (i > 0)
          type += ', ';
        type += name;
        if (param.optional)
          type += '?';
        if (param.type) {
          type += ': ';
          type += toTernType(param.type, dojoApi, false, param.props);
        }
      }
    }
    type += ')';
    if (chainable) {
      type += ' -> !this';
    } else if (isConstructor) {
      type += ' -> +';
      type += getClassName(yuiClass.name, dojoApi);
    } else if (returnValue) {
      type += ' -> ';
      type += toTernType(returnValue.type, dojoApi, true, returnValue.props);
    }
    return type;
  }

  function getClassName(className, dojoApi) {
    if (className === 'YUI') {
      return className;
    }
    var yuiClass = dojoApi.classes[className];
    if (yuiClass && yuiClass.module) {
      return yuiClass.module.replace(/-/g, '_') + '.' + className;
    }
    return className;
  }

  function visitModule(dojoApi, ternDef, yuiModule, moduleName) {
    var ternModule = createTernModule(ternDef, moduleName);
    for ( var className in yuiModule.classes) {
      var yuiClass = dojoApi.classes[className];
      visitClass(dojoApi, ternDef, ternModule, yuiClass, className);
    }
  }
  
  var extendedType = {
      "dojo/dom": {
        "byId": {
         "!type": "fn(id: string|+Node, doc?: +Document) -> +Element",      
        },
        "setSelectable": {
          "!type": "fn(node: string|+Node, selectable: bool)"
         }
      }
  }
  
  function getExtendedType(moduleName, methodName) {
    var mod = extendedType[moduleName];
    if (mod) {
      var method = mod[methodName];
      return method ? method["!type"] : null;
    }
  }
  
});