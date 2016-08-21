import config      from '../config';
//import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';

gulp.task('browserSync', ['nodemon'], function() {

  //const DEFAULT_FILE = 'index.html';
  //const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

  browserSync.init({
    proxy: 'http://localhost:' + config.nodemon.port,
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    ghostMode: {
      links: false
    },
    browser: 'google chrome'
  });

});
