'use strict';

module.exports = {
  dev: {
    src: ['app/**/*.js', '!app/bower_components/**'],
    options: {
      silent              : true,
      breakOnErrors       : false,
      errorsOnly          : false
    }
  },
  ci: {
    src: ['app/**/*.js', '!app/bower_components/**'],
    options: {
      silent              : true,
      breakOnErrors       : false,
      checkstyleXML       : 'reports/complexity/complexity-result.xml',
      errorsOnly          : false
    }
  }
};
