tern.dojotoolkit
===========

[![Build Status](https://secure.travis-ci.org/angelozerr/tern.dojotoolkit.png)](http://travis-ci.org/angelozerr/tern.dojotoolkit)

Generates [Tern plugin](http://ternjs.net/doc/manual.html#plugins) for [Dojo Toolkit](http://dojotoolkit.org/) from their Javascript sources by using api.json.

## Demo

You can see demo :

 
## How it works? 

Today tern def generation is done at hand. It should be very cool if grunt tasks will exists. 

Any contributions are welcome!

## Structure

The basic structure of the project is given in the following way:

* `api/` api.json of dojo.
* `demos/` demos with dojo tern plugin which use CodeMirror.
* `html/` generates dojo from api.json by using HTML pages.
* `lib/` lib to  transform dojo api.json to tern def.
* `plugin/` dojo tern plugin where defs was generated with lib dojo tern plugin. 
* `test/` contains test of dojo tern plugin.
