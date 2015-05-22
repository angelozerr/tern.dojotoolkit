"use strict";

/**
 * Create grunt target template to generate tern plugin for dojo 1.9 in the file
 * plugin/dojotoolkit_1.9.js
 */

var templateUtil = require('./template-util');

function getData() {
  return templateUtil.createData("1.9", false);
}

templateUtil.addTargetTemplate({
  'generate-tern.dojotoolkit_1.9' : {
    'options' : {
      'data' : getData
    },
    'files' : {
      'plugin/dojotoolkit1.9.js' : [ 'generator/dojotoolkit_amd.js.tpl' ]
    }
  }
});