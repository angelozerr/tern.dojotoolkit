"use strict";

/**
 * Create grunt target template to generate tern plugin for dojo 1.6 in the file
 * plugin/dojotoolkit_1.6.js
 */

var templateUtil = require('./template-util');

function getData() {
  return templateUtil.createData("1.6", true);
}

templateUtil.addTargetTemplate({
  'generate-tern.dojotoolkit_1.6' : {
    'options' : {
      'data' : getData
    },
    'files' : {
      'plugin/dojotoolkit1.6.js' : [ 'generator/dojotoolkit.js.tpl' ]
    }
  }
});