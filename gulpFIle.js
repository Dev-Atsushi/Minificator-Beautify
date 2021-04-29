const { src, dest } = require("gulp");
const beautify      = require('gulp-beautify');

exports.beautyjs = function() {
  return src('js/*.js')
    .pipe(beautify.js({ indent_size: 2 }))
    .pipe(dest('js/'))
};

exports.minjs = function() {
  return gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(javascriptObfuscator({
      compact: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
};
