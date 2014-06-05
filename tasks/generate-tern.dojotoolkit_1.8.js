"use strict";

/**
 * Create grunt target template to generate tern plugin for dojo 1.8 in the file
 * plugin/dojotoolkit_1.8.js
 */

var templateUtil = require('./template-util');

function getData() {
  return templateUtil.createData("1.8", false);
}

templateUtil.addTargetTemplate({
  'generate-tern.dojotoolkit_1.8' : {
    'options' : {
      'data' : getData
    },
    'files' : {
      'plugin/dojotoolkit_1.8.js' : [ 'generator/dojotoolkit_amd.js.tpl' ]
    }
  }
});