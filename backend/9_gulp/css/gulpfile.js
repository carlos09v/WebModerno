const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'));
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('./src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // Converter pra CSS + Tratar erro
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('./build/css'))
}

function copiarHTML() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)