exports.path = {
    src: {
        pug: './src/pug/**/*.pug',
        scss: './src/scss/**/*.scss',
        scripts: './src/scripts/',
        img: './src/assets/img/*.{jpg,png,jpeg,svg}',
        svgCommon: './src/assets/icons/**/*',
        svgSolid: './src/assets/icons/icons-solid/*.svg',
        svgColored: './src/assets/icons/icons-colored/*.svg'
    },

    dist: {
        baseDir: './build/',
        styles: './build/styles/',
        scripts: './build/scripts',
        img: './build/assets/img/',
        svgSolid: './build/assets/sprites/sprites-solid',
        svgColored: './build/assets/sprites/sprites-colored'
    },

    clean: './build'
};