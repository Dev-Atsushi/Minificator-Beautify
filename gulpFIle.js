const { src, dest } = require("gulp")
const beautify = require('gulp-beautify');

exports.js = function() {
    return src('js/*.js')
        .pipe(beautify.js({ indent_size: 2 }))
        .pipe(dest('js/'))
}

exports.css = function() {
    return src('css/*.css')
    .pipe(beautify.css({ indent_size: 2 }))
    .pipe(dest('css/'))
}

exports.html = function() {
    return src('html/*.html')
    .pipe(beautify.css({ indent_size: 2 }))
    .pipe(dest('html/'))
}
