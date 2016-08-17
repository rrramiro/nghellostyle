var ClosureCompiler = require('google-closure-compiler').compiler;
 
console.log(ClosureCompiler.COMPILER_PATH); // absolute path the compiler jar 
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains 
 
var closureCompiler = new ClosureCompiler({
  js: ['closure/library/base.js', 'app/js/app.js', 'app/states/**/*.js', 'app/components/**/*.js' ],
  compilation_level: 'ADVANCED_OPTIMIZATIONS',
  language_in: 'ECMASCRIPT5_STRICT',
  manage_closure_dependencies: true,
  angular_pass: true,
  generate_exports: true,
  externs: ['closure/externs/angular.js'],
  js_output_file: 'app/js/app.min.js'
});
 
var compilerProcess = closureCompiler.run(function(exitCode, stdOut, stdErr) {
	console.log('compilation complete')
});
