tern.dojotoolkit
===========

[![Build Status](https://secure.travis-ci.org/angelozerr/tern.dojotoolkit.png)](http://travis-ci.org/angelozerr/tern.dojotoolkit)

Generates [Tern plugin](http://ternjs.net/doc/manual.html#plugins) for [Dojo Toolkit](http://dojotoolkit.org/) from their Javascript sources by using api.json.

## Demo

You can see online demo (CodeMirror is used):

 * with [dojotoolkit_1.6.js](https://github.com/angelozerr/tern.dojotoolkit/blob/master/plugin/dojotoolkit_1.6.js) tern plugin [here](http://codemirror-java.opensagres.eu.cloudbees.net/codemirror-javascript/demo/dojotoolkit_1.6.html).
 * with [dojotoolkit_1.9.js](https://github.com/angelozerr/tern.dojotoolkit/blob/master/plugin/dojotoolkit_1.9.js) tern plugin [here](http://codemirror-java.opensagres.eu.cloudbees.net/codemirror-javascript/demo/dojotoolkit_1.9.html).

 
## How it works? 

TODO explain grunt.

## Structure

The basic structure of the project is given in the following way:

* `api/` api.json of dojo.
* `demos/` demos with dojo tern plugin which use CodeMirror.
* `generator/` lib to  transform dojo api.json to tern def, generates dojo from api.json by using HTML pages.
* `plugin/` dojo tern plugin where defs was generated with lib dojo tern plugin. 
* `test/` contains test of dojo tern plugin.
