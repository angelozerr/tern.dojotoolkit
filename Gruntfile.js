module.exports = function(grunt) {

  var fs = require("fs"), path = require("path"), DojoApi2TernDef = require("./generator/DojoApi2TernDef");

  function getData_1_6() {
    return createData("1_6");
  }

  grunt.initConfig({
    'template' : {
      'generate-tern.dojotoolkit_1_6' : {
        'options' : {
          'data' : getData_1_6
        },
        'files' : {
          'plugin/dojotoolkit_1_6.js' : [ 'generator/dojotoolkit.js.tpl' ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-template');
  grunt.registerTask('default', [ 'template' ]);
  
  // -------------- Utils
  
  function createData(version) {
    var dojoApi = loadDojoApi(version);
    var ternDef = DojoApi2TernDef.generate(dojoApi);
    var defs = JSON.stringify(ternDef, null, ' ');
    return {
      'version' : version,
      'defs' : defs
    }
  }

  function loadDojoApi(version) {
    var filename = path.resolve(".", "api/" + version.replace(/_/g, '.')
        + "/api.json");
    return JSON.parse(fs.readFileSync(filename, "utf8"));
  }
  
};