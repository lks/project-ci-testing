module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    singleRun: true,

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage', 'dots', 'junit', 'threshold'],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-threshold-reporter'
            ],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/view1/**/!(*_test)+(.js)': 'coverage',
      'app/view2/**/!(*_test)+(.js)': 'coverage',
      'app/components/**/!(*_test)+(.js)': 'coverage'
    },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'cobertura',
      dir : 'reports/coverage/',
      file : 'coverage.xml'
    },

    thresholdReporter: {
      statements: 90,
      branches: 60,
      functions: 85,
      lines: 90
    }
  });
};
