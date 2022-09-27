let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a) // 3
console.log(global.b) // 123 - Global = Windown no browser
console.log(this.c) // 456
console.log(module.exports.c) // 456
console.log(module.exports === this) // true
console.log(module.exports) // { c: 456, d: false, e: 'teste' }

// Criando uma variável sem var e let!
abc = 3 // Não faça issoo! - Fuja do escopo global!
console.log(global.abc) // 3
