const { series, parallel } = require('gulp')
const gulp = require('gulp')

// Tasks
const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app') 
const { depsCSS, depsFonts } = require('./gulpTasks/desps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

// Workflow
module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)