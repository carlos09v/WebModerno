const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('node-sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html') // pegar todos .html dentro de src
        .pipe(htmlmin({ collapseWhitespace: true })) // Tirar espaço em branco - (uglify)
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // Converter pra CSS + Tratar erro
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js') // Pegar todos .js dentro da pasta js
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*') // Pegar qualquer arquivo (jpg ou png) dentro da pasta imgs
        .pipe(gulp.dest('build/assets/imgs'))
}

// Registros para ser monitorado
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}