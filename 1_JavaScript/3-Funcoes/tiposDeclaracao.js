console.log(soma(5, 9)) // 14
console.log(sub(5, 2)) // ERRO - função ainda não foi criada

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(5, 2)) // 3

// named function expression
const mult = function mult(x, y) {
    return x * y
}