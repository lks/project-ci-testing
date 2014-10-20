'use strict';

var fs = require('fs');
var path = require('path');
var reportPath = './reports/jscpd';

// Create the report directory
var exists = fs.existsSync(reportPath);
if (!exists) {
  var dirs = reportPath.split(path.sep);
  var fullPath = '';

  dirs.forEach(function(dir) {
    fullPath = path.join(fullPath, dir);
    try {
      fs.mkdirSync(fullPath);
    } catch (e) {
    }
  });
}

module.exports = {
  dev: {
    path: '.'
  },
  ci: {
    path: '.',
    output: reportPath + '/jscpd-result.xml',
    options: {
      verbose: true
    }
  }
};
