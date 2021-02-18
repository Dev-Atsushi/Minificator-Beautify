const { src, dest } = require("gulp")
const beautify = require('gulp-beautify');

exports.js = function() {
    return src('js/*.js')
        .pipe(beautify.js({ indent_size: 2 }))
        .pipe(dest('js/'))
}
