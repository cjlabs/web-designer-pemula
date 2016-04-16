var gulp = require('gulp'),
requireDir = require('require-dir')
webserver = require('gulp-webserver')
concat = require('gulp-concat')
sass = require('gulp-sass');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var config = require('./gulp.config.js');
var inject = require('gulp-inject');
var browsersync = require('browser-sync');
var changed = require('gulp-changed');

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

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

	gulp.task('copyfonts', function() {
		   gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
	      .pipe(gulp.dest('./dist/fonts'));
	});
	
	
