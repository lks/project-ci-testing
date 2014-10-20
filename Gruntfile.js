'use strict';

var fs = require('fs');

function loadConfig(path) {
  var files = fs.readdirSync(path);
  var obj   = {};
  var key;

  files.forEach(function(file) {
    if (/\.conf\.js$/.test(file)) {
      return;
    }
    key      = file.replace(/\.js$/,'');
    obj[key] = require(path + file);
  });

  return obj;
}

module.exports = function(grunt) {
  var config = {
    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      docs : {
        dist: require('./bower.json').docsPathDist
      },
      dist: 'dist'
    },
    pkg : '<json:package.json>',
    env : process.env,
    meta: {
      version: '<%= grunt.template.today("yyyymmdd.HHMMss") %>'
    }
  };

  grunt.util._.extend(config, loadConfig(__dirname + '/tasks/options/'));

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('tasks');
  grunt.config.init(config);
};
