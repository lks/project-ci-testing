'use strict';

// Make sure code styles are up to par and there are no obvious convention mistakes
module.exports = {
  dev: {
    src: [
      'app/**/*.js',
      'Gruntfile.js',
      'e2e/**/*.js',
      'tasks/**/*.js',
      'docs/**/*.js',
      '!docs/app/assets/**/*.js',
      '!docs/templates/**'
    ],
    options: {
      config: '.jscsrc'
    }
  },
  ci: {
    src: [
      'app/**/*.js',
      'Gruntfile.js',
      'e2e/**/*.js',
      'tasks/**/*.js',
      'docs/**/*.js',
      '!docs/app/assets/**/*.js',
      '!docs/templates/**'
    ],
    options: {
      config: '.jscsrc',
      force: true,
      reporter: 'checkstyle',
      reporterOutput: './reports/jscs/jscs-result.xml'
    }
  }
};
