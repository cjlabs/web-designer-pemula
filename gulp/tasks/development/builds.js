var gulp = require('gulp');
var fonts  = require('../../config.js').fonts;
var css = require('../../config.js').css;
gulp.task('build:fonts', function(){
    gulp.src(fonts.files)
    .pipe(gulp.dest('./src/fonts'));

});

gulp.task('build:css', function(){

    gulp.src(css.files)
    .pipe(minify())
    .pipe(concat('build.css'))
    .pipe(gulp.dest(css.dest));
});
