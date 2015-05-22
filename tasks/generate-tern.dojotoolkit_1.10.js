"use strict";

/**
 * Create grunt target template to generate tern plugin for dojo 1.10 in the file
 * plugin/dojotoolkit_1.10.js
 */

var templateUtil = require('./template-util');

function getData() {
  return templateUtil.createData("1.10", false, true);
}

templateUtil.addTargetTemplate({
  'generate-tern.dojotoolkit_1.10' : {
    'options' : {
      'data' : getData
    },
    'files' : {
      'plugin/dojotoolkit1.10.js' : [ 'generator/dojotoolkit_amd.js.tpl' ]
    }
  }
});