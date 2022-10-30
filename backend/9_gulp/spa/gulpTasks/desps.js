const gulp = require('gulp')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

const depsCSS = cb => {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifyCss({ 'uglyComments': false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('./build/assets/css'))
}

const depsFonts = cb => {
    return gulp.src('node_modules/font-awesome/fonts/*.*') // Pegar tudo
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}