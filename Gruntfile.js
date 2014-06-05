module.exports = function(grunt) {

  require("./tasks/generate-tern.dojotoolkit_1.6");
  require("./tasks/generate-tern.dojotoolkit_1.8");
  require("./tasks/generate-tern.dojotoolkit_1.9");
  
  var templateUtil = require("./tasks/template-util");

  var template = templateUtil.getTemplate();
  grunt.initConfig({
    'template' : template
  });

  grunt.loadNpmTasks('grunt-template');
  grunt.registerTask('default', [ 'template' ]);

};