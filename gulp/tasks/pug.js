const { src, dest } = require('gulp');
const { path } = require('../base/path');
const pug = require('gulp-pug');

exports.pug = function () {

    return src('./src/pug/**.pug')
        .pipe(pug({
            doctype: 'html'
        }))
        .pipe(dest(path.dist.baseDir))
};