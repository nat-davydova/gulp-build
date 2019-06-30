const {parallel} = require('gulp');

const { pug } = require('./pug');
const { scss } = require('./scss');
const { scripts } = require('./scripts');
const { imgRebase } = require('./img');
const { svgSpriteColored, svgSpriteSolid } = require('./sprites');

exports.build = parallel(pug, scss, scripts, imgRebase, svgSpriteSolid, svgSpriteColored);