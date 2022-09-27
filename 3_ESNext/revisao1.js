// ESNext = ECMAScript

// 1 - let e const
{
    var a = 2
    let b = 3
}
// escopos
console.log(a) // 2
// console.log(b) // Erro - b is not defined

// 2 - Template String
const produto = 'iPad'
console.log(`${produto} é caro !`)

// 3 - Destructuring
// String
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

// Array
const [x, y] = [1, 2, 3]
console.log(x, y) // 1 2

// Object
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome) // 9 Ana