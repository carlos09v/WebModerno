// > = aponta
// this > module.exports
console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)// false - Dentro de uma função
    // Fora = true
    console.log(this === module.exports) // false
    console.log(this === global) // true - this > global em function
}

logThis()

const logThis2 = () => {
    console.log(this === exports)// true - Dentro de uma arrow função
    // Fora = false
    console.log(this === module.exports) // true
    console.log(this === global) // false - this !> global em arrow function
}

logThis2()