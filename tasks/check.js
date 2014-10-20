/**
 * Created by j.calabrese on 20/10/2014.
 */
'use strict';

module.exports = function(grunt) {
  grunt.registerTask('check', 'Validate files and coding syle', function() {
    var type = (this.args[0] || 'dev');
    var tasks = [
      'jshint:' + type,
      'jscs:' + type,
      'complexity:' + type,
      'plato:' + type
    ];
    if (type === 'ci') {
      tasks.push('jscpd:' + type);
    }
    grunt.task.run(tasks);
  });
};
