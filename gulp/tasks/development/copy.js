/**
 * copy.js is for copy all assets to src directory
 * include css, jss, fonts
 * execute copy:vendor for todo all copy tasks
 * */

var gulp  = require('gulp');
var font  = require('../../config.js').fonts;
var vendor = require('../../config.js').vendors;
var path = require('../../config.js').paths;
var flatten = require('gulp-flatten');

gulp.task('copy:fonts', function() {
    gulp.src(font.files)
    .pipe(flatten())
    .pipe(gulp.dest(path.src + '/fonts/'));
});

gulp.task('copy:css', function(){
    gulp.src(vendor.files+ "/**/*.css")
    .pipe(flatten())
    .pipe(gulp.dest(path.src +'/vendor/'));
});

gulp.task('copy:js', function(){

});


gulp.task('copy:vendors', function(){
    gulp.src(vendors.files)
    .pipe(gulp.dest('./src/vendor'));   
});
