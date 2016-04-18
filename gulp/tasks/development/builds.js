var gulp = require('gulp');
var fonts  = require('../../config.js').fonts;
gulp.task('build:fonts', function(){
	gulp.src(fonts.files)
	.pipe(gulp.dest('./src/fonts'));

});
