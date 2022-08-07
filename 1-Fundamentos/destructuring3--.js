function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // De 40 a 50
console.log(rand({ min: 955})) // De 955 a 1000
console.log(rand({})) // De 0 a 1000
console.log(rand()) // Erro
