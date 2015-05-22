var dojoApi = {	"dojo/dom": {
		"location": "dojo/dom",
		"type": "object",
		"summary": "<p>This module defines the core dojo DOM API.</p>\n",
		"methods": [
			{
				"name": "byId",
				"scope": "normal",
				"types": [
					"function"
				],
				"from": "dojo/dom",
				"parameters": [
					{
						"name": "id",
						"types": [
							"String",
							"DOMNode"
						],
						"usage": "required",
						"summary": "<p>A string to match an HTML id attribute or a reference to a DOM Node\n</p>\n"
					},
					{
						"name": "doc",
						"types": [
							"Document"
						],
						"usage": "optional",
						"summary": "<p>Document to work in. Defaults to the current value of\ndojo/_base/window.doc.  Can be used to retrieve\nnode references from other documents.\n</p>\n"
					}
				],
				"returnTypes": [
					"instance"
				],
				"summary": "<p>Returns DOM node with matching <code>id</code> attribute or falsy value (ex: null or undefined)\nif not found.  If <code>id</code> is a DomNode, this function is a no-op.\n</p>\n",
				"examples": [
					"<p>Look up a node by ID:\n\n</p>\n<pre><code>require([&quot;dojo/dom&quot;], function(dom){\n    var n = dom.byId(&quot;foo&quot;);\n});</code></pre>\n",
					"<p>Check if a node exists, and use it.\n\n</p>\n<pre><code>require([&quot;dojo/dom&quot;], function(dom){\n    var n = dom.byId(&quot;bar&quot;);\n    if(n){ doStuff() ... }\n});</code></pre>\n",
					"<p>Allow string or DomNode references to be passed to a custom function:\n\n</p>\n<pre><code>require([&quot;dojo/dom&quot;], function(dom){\n    var foo = function(nodeOrId){\n        nodeOrId = dom.byId(nodeOrId);\n        // ... more stuff\n    }\n});</code></pre>\n"
				]
			},
			{
				"name": "isDescendant",
				"scope": "normal",
				"types": [
					"function"
				],
				"from": "dojo/dom",
				"parameters": [
					{
						"name": "node",
						"types": [
							"DOMNode",
							"String"
						],
						"usage": "required",
						"summary": "<p>string id or node reference to test</p>\n"
					},
					{
						"name": "ancestor",
						"types": [
							"DOMNode",
							"String"
						],
						"usage": "required",
						"summary": "<p>string id or node reference of potential parent to test against\n</p>\n"
					}
				],
				"returnTypes": [
					"boolean"
				],
				"summary": "<p>Returns true if node is a descendant of ancestor</p>\n",
				"examples": [
					"<p>Test is node id=&quot;bar&quot; is a descendant of node id=&quot;foo&quot;\n\n</p>\n<pre><code>require([&quot;dojo/dom&quot;], function(dom){\n    if(dom.isDescendant(&quot;bar&quot;, &quot;foo&quot;)){ ... }\n});</code></pre>\n"
				]
			},
			{
				"name": "setSelectable",
				"scope": "normal",
				"types": [
					"function"
				],
				"from": "dojo/dom",
				"parameters": [
					{
						"name": "node",
						"types": [
							"undefined"
						],
						"usage": "required"
					},
					{
						"name": "selectable",
						"types": [
							"undefined"
						],
						"usage": "required"
					}
				],
				"returnTypes": []
			}
		]
	}
}