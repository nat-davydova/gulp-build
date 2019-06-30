const { src, dest } = require('gulp');
const { path } = require('../base/path');

exports.moveAssets = function () {

	return src(path.src.movedAssets)
		.pipe(dest(path.dist.movedAssets))

};