'use strict';

var grunt = require('grunt');

module.exports = {
  dev: {
    options: {
      jshint: grunt.file.readJSON('.jshintrc')
    },
    files: {
      'reports/plato': ['app/**/*.js', '!app/bower_components/**']
    }
  },
  ci: {
    options: {
      jshint: grunt.file.readJSON('.jshintrc'),
      exclude: /(node_modules|test|tasks|reports|Gruntfile|bower_components).*\.js$/
    },
    files: {
      'reports/plato': ['app/**/*.js', '!app/bower_components/**']
    }
  }
};
