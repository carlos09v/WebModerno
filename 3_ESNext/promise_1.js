// Uma promessa que retornará um dado no futuro

// .then - qundo for cumprido/realizado
const primeiroElemento = elemnto => elemnto[0]
const primeiraLetra = letra => letra[0]

let p = new Promise(function(resolve) {
    resolve(['Ana', 3, 5, 7, 8])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
