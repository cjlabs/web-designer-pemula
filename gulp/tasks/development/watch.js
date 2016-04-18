var gulp = require('gulp');
var config = require('../../config').watch;

/**
 *  * Start browsersync task and then watch files for changes
 *   */
gulp.task('watch', ['webserver'], function() {
	gulp.watch(config.fonts ['copy:fonts']);
	gulp.watch(config.images,  ['images']);
	});
