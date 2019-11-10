const { task, series } = require( 'gulp' );

const { watch } = require('./gulp/tasks/watch');
const { cleanBuild } = require('./gulp/tasks/clean');
const { build } = require('./gulp/tasks/build');

const { imgMin } = require('./gulp/tasks/img');

task('default', series(cleanBuild, build, watch));

task('build', series(cleanBuild, build));

task('img-min', imgMin);
