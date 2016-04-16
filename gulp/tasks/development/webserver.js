var gulp = require('gulp');
var webserver = require('gulp-webserver');
/**
 * START SERVER
 */
gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(webserver({
		livereload: true,
		fallback: 'index.html',
	}));
});


