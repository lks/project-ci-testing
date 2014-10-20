'use strict';

// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
  dev: {
    options: {
      jshintrc: true,
      reporter: require('jshint-stylish')
    },
    src: [
      'app/**/*.js',
      '!app/bower_components/**',
      'Gruntfile.js',
      'test/e2e/**/*.js',
      'tasks/**/*.js',
      'docs/**/*.js',
      '!docs/app/assets/**/*.js',
      '!docs/templates/**'
    ]
  },
  ci: {
    options: {
      jshintrc: true,
      force: true,
      reporter: 'checkstyle',
      reporterOutput: './reports/jshint/jshint-result.xml'
    },
    src: [
      'app/**/*.js',
      '!app/bower_components/**',
      'Gruntfile.js',
      'test/e2e/**/*.js',
      'tasks/**/*.js',
      'docs/**/*.js',
      '!docs/app/assets/**/*.js',
      '!docs/templates/**'
    ]
  }
};
