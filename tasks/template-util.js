"use strict";

/**
 * Grunt template utilities for generate Dojo Toolkit Tern plugin by using Dojo
 * api.
 */

var fs = require("fs"), path = require("path"), DojoApi2TernDef = require("../generator/DojoApi2TernDef"), DojoDetails2TernDef = require("../generator/DojoDetails2TernDef");

/**
 * Create dojo data waited by the grunt template.
 * 
 * @param version
 *        version of dojo.
 * @param useOldApi
 *        true if it uses old api and false otherwise.
 * @param formatJSON
 *        true if tern defs must be formated.
 */
exports.createData = function(version, useOldApi, formatJSON) {
  var dojoApi = loadDojoApi(version);
  var options = {
    version : version
  };
  var f = useOldApi ? DojoApi2TernDef : DojoDetails2TernDef;
  var ternDef = f.generate(dojoApi, options);
  var defs = formatJSON ? JSON.stringify(ternDef, null, ' ') : JSON
      .stringify(ternDef);
  return {
    'version' : version,
    'defs' : defs
  }
}

var template = {};

/**
 * Add dojo target template.
 * 
 * @param the
 *        grunt target template.
 */
exports.addTargetTemplate = function(target) {
  for ( var name in target) {
    template[name] = target[name];
  }
}

/**
 * Returns the dojo grunt template which contains the list of dojo target
 * template.
 * 
 * @return the dojo grunt template which contains the list of dojo target
 *         template.
 */
exports.getTemplate = function() {
  return template;
}

// ----------- private function

/**
 * Load dojo api.
 */
function loadDojoApi(version) {
  var filename = path.resolve(".", "api/" + version + "/api.json");
  if (!fs.existsSync(filename)) {
    filename = path.resolve(".", "api/" + version + "/details.json");
  }
  return JSON.parse(fs.readFileSync(filename, "utf8"));
}