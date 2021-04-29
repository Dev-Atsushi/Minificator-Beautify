const { src, dest }        = require("gulp");
const beautify             = require('gulp-beautify');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const sourcemaps           = require('gulp-sourcemaps');

exports.beautyjs = function() {
  return src('js/*.js')
    .pipe(beautify.js({ indent_size: 2 }))
    .pipe(dest('js/'))
};

exports.minjs = function() {
  return src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(javascriptObfuscator({
      compact: true
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
};
