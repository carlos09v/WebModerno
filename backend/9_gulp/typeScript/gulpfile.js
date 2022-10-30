const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // ñ precisa dizer (ja esta no tsconfig.json)
        .pipe(tsProject()) // Compilar para JS
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)