const gulp = require('gulp')
const webserver = require('gulp-webserver') // server
const watch = require('gulp-watch') // monitorar arquivo

const servidor = () => {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, // Abrir o browser
            livereload: true
        }))
}

const monitorarArquivos = cb => {
    // Qualquer mudança no arquivo, vai ser chamado a funcao task
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}