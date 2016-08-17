'use strict';

exports.config = {

  specs: [
    '*.scenario.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8001/',

  framework: 'jasmine',

  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: true
      }));
   }

};
