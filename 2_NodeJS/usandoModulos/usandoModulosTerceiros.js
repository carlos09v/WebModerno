// npm i loadash
// npm i -g nodemon
// Arquivo .gitignore > ñ dar commit na pasta node_modules no github

// _ = referência ao lodash
const _ = require('lodash')
setInterval(() => console.log(_.random(5, 10)), 2000)
