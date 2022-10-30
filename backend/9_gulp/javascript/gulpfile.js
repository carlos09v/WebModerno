const { series } = require('gulp')
const gulp = require('gulp')
const gulpConcat = require('gulp-concat')
const gulpUglify = require('gulp-uglify')
const gulpBabel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('./src/**/*.js') // Vai pegar os 2 arquivos
        .pipe(gulpBabel({
            comments: false, // ñ pegar os comentarios
            presets: ['env'] // Pegar o JS mais novo
        }))
        .pipe(gulpUglify()) // Minificar o codigo
        .on('error', err => console.log(err)) // Tratar erro
        .pipe(gulpConcat('codigo.min.js')) // Concatenar o 2 arquivos em 1
        .pipe(gulp.dest('build'))

    return cb()
}

function fim(cb) {
    console.log('Fim !')
    return cb()
}

exports.default = series(transformacaoJS, fim)

// Obs: O arquivo final vai ser o que foi gerado no BUILD