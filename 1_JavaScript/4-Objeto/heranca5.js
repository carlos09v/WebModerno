console.log(typeof String) // Function
console.log(typeof Array) // Function
console.log(typeof Object) // Function

// 1 - Retorna a string ao contrario
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse()) // r3doC alocsE

// 2 - Retornar o primeiro valor do Array
Array.prototype.first = function() {
    return this[0]
}
console.log([2, 6, 5, 4].first()) // 2
console.log(['b', 'a', 'c'].first()) // b

// 3 - Sobrescrever a funcao toString --- CUIDADO !
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // odut uocsaL - Lascou tudo