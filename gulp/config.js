var src               = 'src';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var distribution	  = 'dist';
var srcAssets         = 'src';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
	browsersync: {
		development: {
			server: {
				baseDir: [development, build, src]
			},
			port: 9999,
			files: [
				developmentAssets + '/css/*.css',
				developmentAssets + '/js/*.js',
				developmentAssets + '/images/**',
				developmentAssets + '/fonts/*'
			]
		}
	},
	images: {
		src:  src + '/img/**/*',
		dest: distribution + '/img'
	},
	watch: {
		sass:    srcAssets + '/scss/**/*.{sass,scss}',
		css: srcAssets + '/css/**/*.css',
		scripts: srcAssets + '/js/**/*.js',
		images:  srcAssets + '/img/**/*',
		sprites: srcAssets + '/img/**/*.png',
		svg:     'vectors/*.svg'
	}
};
