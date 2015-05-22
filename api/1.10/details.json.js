var dojoApi = {"dojo/on": {
  "location": "dojo/on",
  "type": "function",
  "parameters": [
      {
          "name": "target",
          "types": [
              "Element",
              "Object"
          ],
          "usage": "required",
          "summary": "<p>This is the target object or DOM element that to receive events from</p>\n"
      },
      {
          "name": "type",
          "types": [
              "String",
              "Function"
          ],
          "usage": "required",
          "summary": "<p>This is the name of the event to listen for or an extension event type.</p>\n"
      },
      {
          "name": "listener",
          "types": [
              "Function"
          ],
          "usage": "required",
          "summary": "<p>This is the function that should be called when the event fires.</p>\n"
      },
      {
          "name": "dontFix",
          "types": [
              "undefined"
          ],
          "usage": "required"
      }
  ],
  "returnTypes": [
      "Object",
      "undefined"
  ],
  "returnDescription": "<p>An object with a remove() method that can be used to stop listening for this\nevent.</p>\n",
  "summary": "<p>A function that provides core event listening functionality. With this function\nyou can provide a target, event type, and listener to be notified of\nfuture matching events that are fired.</p>\n",
  "description": "<p>To listen for &quot;click&quot; events on a button node, we can do:\n\n</p>\n<pre><code>define([&quot;dojo/on&quot;], function(on){\n    on(button, &quot;click&quot;, clickHandler);\n    ...</code></pre>\n<p>Evented JavaScript objects can also have their own events.\n\n\n</p>\n<pre><code>var obj = new Evented;\non(obj, &quot;foo&quot;, fooHandler);</code></pre>\n<p>And then we could publish a &quot;foo&quot; event:\n\n\n</p>\n<pre><code>on.emit(obj, &quot;foo&quot;, {key: &quot;value&quot;});</code></pre>\n<p>We can use extension events as well. For example, you could listen for a tap gesture:\n\n\n</p>\n<pre><code>define([&quot;dojo/on&quot;, &quot;dojo/gesture/tap&quot;, function(on, tap){\n    on(button, tap, tapHandler);\n    ...</code></pre>\n<p>which would trigger fooHandler. Note that for a simple object this is equivalent to calling:\n\n\n</p>\n<pre><code>obj.onfoo({key:&quot;value&quot;});</code></pre>\n<p>If you use on.emit on a DOM node, it will use native event dispatching when possible.\n</p>\n",
  "methods": [
      {
          "name": "_fixEvent",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/_base/event",
          "private": true,
          "extensionModule": true,
          "parameters": [
              {
                  "name": "evt",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "se",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              }
          ],
          "returnTypes": [
              "undefined"
          ]
      },
      {
          "name": "_preventDefault",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "private": true,
          "parameters": [],
          "returnTypes": []
      },
      {
          "name": "constructor",
          "scope": "prototype",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "target",
                  "types": [
                      "Element",
                      "Object"
                  ],
                  "usage": "required",
                  "summary": "<p>This is the target object or DOM element that to receive events from</p>\n"
              },
              {
                  "name": "type",
                  "types": [
                      "String",
                      "Function"
                  ],
                  "usage": "required",
                  "summary": "<p>This is the name of the event to listen for or an extension event type.</p>\n"
              },
              {
                  "name": "listener",
                  "types": [
                      "Function"
                  ],
                  "usage": "required",
                  "summary": "<p>This is the function that should be called when the event fires.</p>\n"
              },
              {
                  "name": "dontFix",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              }
          ],
          "returnTypes": [
              "Object",
              "undefined"
          ],
          "returnDescription": "<p>An object with a remove() method that can be used to stop listening for this\nevent.</p>\n",
          "summary": "<p>A function that provides core event listening functionality. With this function\nyou can provide a target, event type, and listener to be notified of\nfuture matching events that are fired.</p>\n",
          "description": "<p>To listen for &quot;click&quot; events on a button node, we can do:\n\n</p>\n<pre><code>define([&quot;dojo/on&quot;], function(on){\n    on(button, &quot;click&quot;, clickHandler);\n    ...</code></pre>\n<p>Evented JavaScript objects can also have their own events.\n\n\n</p>\n<pre><code>var obj = new Evented;\non(obj, &quot;foo&quot;, fooHandler);</code></pre>\n<p>And then we could publish a &quot;foo&quot; event:\n\n\n</p>\n<pre><code>on.emit(obj, &quot;foo&quot;, {key: &quot;value&quot;});</code></pre>\n<p>We can use extension events as well. For example, you could listen for a tap gesture:\n\n\n</p>\n<pre><code>define([&quot;dojo/on&quot;, &quot;dojo/gesture/tap&quot;, function(on, tap){\n    on(button, tap, tapHandler);\n    ...</code></pre>\n<p>which would trigger fooHandler. Note that for a simple object this is equivalent to calling:\n\n\n</p>\n<pre><code>obj.onfoo({key:&quot;value&quot;});</code></pre>\n<p>If you use on.emit on a DOM node, it will use native event dispatching when possible.\n</p>\n"
      },
      {
          "name": "emit",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "target",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "type",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "event",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              }
          ],
          "returnTypes": [
              "undefined"
          ]
      },
      {
          "name": "matches",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "node",
                  "types": [
                      "DOMNode"
                  ],
                  "usage": "required",
                  "summary": "<p>The node that originate the event</p>\n"
              },
              {
                  "name": "selector",
                  "types": [
                      "String"
                  ],
                  "usage": "required",
                  "summary": "<p>The selector to check against</p>\n"
              },
              {
                  "name": "context",
                  "types": [
                      "DOMNode"
                  ],
                  "usage": "required",
                  "summary": "<p>The context to search in.</p>\n"
              },
              {
                  "name": "children",
                  "types": [
                      "Boolean"
                  ],
                  "usage": "required",
                  "summary": "<p>Indicates if children elements of the selector should be allowed. This defaults to\ntrue</p>\n"
              },
              {
                  "name": "matchesTarget",
                  "types": [
                      "Object",
                      "dojo/query"
                  ],
                  "usage": "optional",
                  "summary": "<p>An object with a property &quot;matches&quot; as a function. Default is dojo/query.\nMatching DOMNodes will be done against this function\nThe function must return a Boolean.\nIt will have 3 arguments: &quot;node&quot;, &quot;selector&quot; and &quot;context&quot;\nTrue is expected if &quot;node&quot; is matching the current &quot;selector&quot; in the passed &quot;context&quot;</p>\n"
              }
          ],
          "returnTypes": [
              "DOMNode"
          ],
          "returnDescription": "<p>The matching node, if any. Else you get false</p>\n",
          "summary": "<p>Check if a node match the current selector within the constraint of a context</p>\n"
      },
      {
          "name": "once",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "target",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "type",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "listener",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "dontFix",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              }
          ],
          "returnTypes": [
              "undefined"
          ],
          "summary": "<p>This function acts the same as on(), but will only call the listener once. The \nlistener will be called for the first\nevent that takes place and then listener will automatically be removed.</p>\n"
      },
      {
          "name": "parse",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "target",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "type",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "listener",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "addListener",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "dontFix",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "matchesTarget",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              }
          ],
          "returnTypes": [
              "undefined"
          ]
      },
      {
          "name": "pausable",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "target",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "type",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "listener",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              },
              {
                  "name": "dontFix",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required"
              }
          ],
          "returnTypes": [
              "undefined"
          ],
          "summary": "<p>This function acts the same as on(), but with pausable functionality. The\nreturned signal object has pause() and resume() functions. Calling the\npause() method will cause the listener to not be called for future events. Calling the\nresume() method will cause the listener to again be called for future events.</p>\n"
      },
      {
          "name": "selector",
          "scope": "normal",
          "types": [
              "function"
          ],
          "from": "dojo/on",
          "parameters": [
              {
                  "name": "selector",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required",
                  "summary": "<p>The CSS selector to use for filter events and determine the |this| of the event listener.</p>\n"
              },
              {
                  "name": "eventType",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required",
                  "summary": "<p>The event to listen for</p>\n"
              },
              {
                  "name": "children",
                  "types": [
                      "undefined"
                  ],
                  "usage": "required",
                  "summary": "<p>Indicates if children elements of the selector should be allowed. This defaults to \ntrue</p>\n"
              }
          ],
          "returnTypes": [
              "function"
          ],
          "summary": "<p>Creates a new extension event with event delegation. This is based on\nthe provided event type (can be extension event) that\nonly calls the listener when the CSS selector matches the target of the event.\n\n</p>\n<p>The application must require() an appropriate level of dojo/query to handle the selector.</p>\n",
          "examples": [
              "<pre><code>require([&quot;dojo/on&quot;, &quot;dojo/mouse&quot;, &quot;dojo/query!css2&quot;], function(on, mouse){\n    on(node, on.selector(&quot;.my-class&quot;, mouse.enter), handlerForMyHover);</code></pre>\n"
          ]
      }
  ]
}
}