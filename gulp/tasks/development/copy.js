var gulp  = require('gulp');
var config = require('../../config.js').fonts;
var vendors = require('../../config.js').vendors;

gulp.task('copy:fonts', function() {
	gulp.src(config.files)
	.pipe(gulp.dest('./dist/fonts'));
});


gulp.task('copy:vendors', function(){
	gulp.src(vendors.files)
	.pipe(gulp.dest('./src/vendor'));

});
