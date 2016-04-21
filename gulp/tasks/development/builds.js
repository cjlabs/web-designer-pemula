var gulp = require('gulp');
var config = require('../../config.js');
var minify = require('gulp-clean-css');
var fonts  = config.fonts;
var css = config.css;
var concat = require('gulp-concat');
var path = config.paths;
;
gulp.task('build:fonts', function(){
    gulp.src(fonts.files)
    .pipe(gulp.dest('./src/fonts'));

});

gulp.task('build:css', function(){

    gulp.src(path.src + '/**/*.css')
    .pipe(minify())
    .pipe(concat('custom.min.css'))
    .pipe(gulp.dest(path.dist));
});
