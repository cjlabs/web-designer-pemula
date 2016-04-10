var gulp = require('gulp'),
    connect = require('gulp-connect')
    sass = require('gulp-sass');

gulp.task('sass', function(){
	  return gulp.src('assets/sass/**/*.scss')
	    .pipe(sass()) // Using gulp-sass
	    .pipe(gulp.dest('assets/css/'))
});

gulp.task('webserver', function() {
      connect.server();
    });

    
    gulp.task('default', ['webserver']);
