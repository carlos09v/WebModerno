// 1 - Arrow Function
const soma = (a, b) => a + b
console.log(soma(5, 9)) // 14

// 1.1 - Arrow Function (this)
const lexico1 = () => console.log(this === exports) // true
const lexico2 = lexico1.bind({}) // true
lexico1()
lexico2()

// 2 - Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}
log() // Node
log('Sou mais forte !') // Sou mais forte !

// 3 - operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 5, 9 ,8)) // 24