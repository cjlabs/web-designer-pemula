var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

var paths  = {
        "client": "src/client/",
        "server": "src/server/",
        "dest":"dist/",
        "vendorcss": [
            "bower_components/bootstrap/dist/css/bootstrap.css",
            "bower_components/bootstrap/dist/css/bootstrap-theme.css"
            ],
        "vendorjs": [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/bootstrap/dist/bootstrap.js"
            ],
        "customcss":[
            "src/css/**/*.css"    
        ],
        "customjs":[
            "src/js/**/*.js"
            ]
}


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
   }
};
