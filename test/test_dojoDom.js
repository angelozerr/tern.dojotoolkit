var util = require("./util");

// see http://dojotoolkit.org/reference-guide/1.10/dojo/dom.html

exports['test dojo/dom'] = function() {
	util.assertCompletion("1.10", "require(['dojo/dom'], function(dom){var node = dom.", {
	    "start":{"line":0,"ch":51},
	    "end":{"line":0,"ch":51},
	    "isProperty":true,
	    "isObjectKey":false,
	    "completions":[{"name":"byId","type":"fn(id: string|Node, doc?: Document) -> Element","origin":"dojotoolkit"},
	                   {"name":"isDescendant","type":"fn(node: Node|string, ancestor: Node|string) -> bool","origin":"dojotoolkit"},
	                   {"name":"setSelectable","type":"fn(node: string|Node, selectable: bool)","origin":"dojotoolkit"}
	                  ]
	});
}

exports['test dojo/dom byId'] = function() {
  util.assertCompletion("1.10", "require(['dojo/dom'], function(dom){dom.byId('someNode').inn", {
      "start":{"line":0,"ch":57},
      "end":{"line":0,"ch":60},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"innerHTML","type":"string","origin":"browser"}
                    ]
  });
}

if (module == require.main) require("test").run(exports);