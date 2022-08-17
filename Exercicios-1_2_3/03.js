// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const expo = (base = 0, expo = 0) => { 
    return base ** expo
}

console.log(expo(2, 4))
console.log(expo(5, 3))
console.log(expo())