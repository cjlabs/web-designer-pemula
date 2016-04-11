var gulp = require('gulp'),
	webserver = require('gulp-webserver')
	concat = require('gulp-concat')
	sass = require('gulp-sass');
	var usemin = require('gulp-usemin');
	var uglify = require('gulp-uglify');
	var minifyCss = require('gulp-clean-css');
	var config = require('./gulp.config.js');
	var inject = require('gulp-inject');
	var browsersync = require('browser-sync');

	gulp.task('connect', function() {
		connect.server();
	});


	gulp.task('webserver', function() {
		gulp.src('app')
		.pipe(webserver({
			livereload: true,
			fallback: 'index.html',
			directoryListing: true,
			open: true
		}));
	});

/**
 *  * Run the build task and start a server with BrowserSync
 *   */
	gulp.task('browsersync', function() {
		browsersync(config);
	});

	gulp.task('vendorcss', function(){
		return gulp
		// set source
		.src(config.paths.vendorcss)
		//      // write to vendor.min.css
		.pipe(concat('vendor.min.css'))
		//              // write to dest
		.pipe(minifyCss())
		.pipe(gulp.dest(config.paths.dest));
	});

	gulp.task('customcss', function(){
		return gulp
		// set source
		.src(config.paths.customcss)
		//      // write to vendor.min.css
		.pipe(concat('custom.min.css'))
		//              // write to dest
		.pipe(minifyCss())
		.pipe(gulp.dest(config.paths.dest));
	});


	gulp.task('vendorjs', function(){
		return gulp
		// set source
		.src(config.paths.vendorjs)
		//              // write to vendor.min.js
		.pipe(concat('vendor.min.js'))
		//                              // start tracking size
		//.pipe(bytediff.start())
		//                                              // uglify js
		.pipe(uglify())
		//                                                             // stop tracking size and output it using bytediffFormatter
		//.pipe(bytediff.stop(bytediffFormatter))

		// write to dest
		.pipe(gulp.dest(config.paths.dest));
	});


	gulp.task('customjs', function(){
		return gulp
		// set source
		.src(config.paths.customJs)
		//              // write to vendor.min.js
		.pipe(concat('custom.min.js'))
		//                              // start tracking size
		//.pipe(bytediff.start())
		//                                              // uglify js
		.pipe(uglify())
		//                                                             // stop tracking size and output it using bytediffFormatter
		//.pipe(bytediff.stop(bytediffFormatter))

		// write to dest
		.pipe(gulp.dest(config.paths.dest));
	});


/**
 *  * Start browsersync task and then watch files for changes
 *   */
	gulp.task('watch', ['browsersync'], function() {

	});


	gulp.task('default', ['connect']);
