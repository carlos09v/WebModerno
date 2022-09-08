const nums = [1, 2, 3, 4, 5]

// 1 - Map
// Mapear os elementos - For com propósito
// Retorna novo Array transfomado
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

// 2
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)