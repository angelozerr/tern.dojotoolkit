module.exports = function(grunt) {

  var fs = require("fs"), path = require("path"), DojoApi2TernDef = require("./generator/DojoApi2TernDef"), DojoDetails2TernDef = require("./generator/DojoDetails2TernDef");
  
  var fnDatas = [];
  fnDatas["1.6"] = function() {return createData("1_6", true)};
  fnDatas["1.8"] = function() {return createData("1_8", false)};
  fnDatas["1.9"] = function() {return createData("1_9", false, true)};
  
  grunt.initConfig({
    'template' : {
      'generate-tern.dojotoolkit_1_6' : {
        'options' : {
          'data' : fnDatas["1.6"]
        },
        'files' : {
          'plugin/dojotoolkit_1_6.js' : [ 'generator/dojotoolkit.js.tpl' ]
        }
      },
      'generate-tern.dojotoolkit_1_8' : {
        'options' : {
          'data' : fnDatas["1.8"]
        },
        'files' : {
          'plugin/dojotoolkit_1_8.js' : [ 'generator/dojotoolkit_amd.js.tpl' ]
        }
      },
      'generate-tern.dojotoolkit_1_9' : {
        'options' : {
          'data' : fnDatas["1.9"]
        },
        'files' : {
          'plugin/dojotoolkit_1_9.js' : [ 'generator/dojotoolkit_amd.js.tpl' ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-template');
  grunt.registerTask('default', [ 'template' ]);

 
  
  // -------------- Utils

  function createData(version, useOldApi, formatJSON) {
    var dojoApi = loadDojoApi(version);
    var options = {
      version : version
    };
    var f = useOldApi ? DojoApi2TernDef : DojoDetails2TernDef;
    var ternDef = f.generate(dojoApi, options);
    var defs = formatJSON ? JSON.stringify(ternDef, null, ' ') : JSON.stringify(ternDef);
    return {
      'version' : version,
      'defs' : defs
    }
  }

  function loadDojoApi(version) {
    var filename = path.resolve(".", "api/" + version.replace(/_/g, '.')
        + "/api.json");
    if (!fs.existsSync(filename)) {
      filename = path.resolve(".", "api/" + version.replace(/_/g, '.')
          + "/details.json");
    }
    return JSON.parse(fs.readFileSync(filename, "utf8"));
  }

};