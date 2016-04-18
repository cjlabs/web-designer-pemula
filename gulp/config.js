var src               = 'src';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var distribution	  = 'dist';
var srcAssets         = 'src';

var productionAssets  = 'build/production/assets';

module.exports = {
	browsersync: {
		development: {
			server: {
				baseDir: [development, build, src]
			},
			port: 9999,
			files: [
				srcAssets + '/css/*.css',
				srcAssets + '/js/*.js',
				srcAssets + '/images/**',
				srcAssets + '/fonts/*'
			]
		}
	},
	images: {
		src:  src + '/img/**/*',
		dest: distribution + '/img'
	},
	fonts:{
		files :[
			'./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}'
		],
        build : distribution  + '/fonts/'
	},
	watch: {
        fonts: srcAssets + '/fonts/**/*.{ttf,woff,eof,svg}',
		sass:   srcAssets + '/scss/**/*.{sass,scss}',
		css: srcAssets + '/css/**/*.css',
		scripts: srcAssets + '/js/**/*.js',
		images:  srcAssets + '/img/**/*',
		sprites: srcAssets + '/img/**/*.png',
		svg:     'vectors/*.svg'
	},
	vendors:{
		files :[
			'node_modules/bootstrap/dist/**/*'	
		]
	}
};
