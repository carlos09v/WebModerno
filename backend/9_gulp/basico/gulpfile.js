const { series, parallel } = require('gulp')
const gulp = require('gulp')
// Fundamentos do Gulp

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
    console.log('Tarefa de copiar!')
    
    gulp.src('./pastaA/**/*.txt') // Qualquer arquivo q termine com .txt
    gulp.src(['./pastaA/arquivo1.txt', './pastaA/arquivo2.txt'])
        // Transformações
        .pipe(gulp.dest('./pastaB')) // Pasta Destino
    return cb()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

// Vai ser executado em Serie (sequencialmente)
// Ou em paralelo (parallel)
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)