/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores. */

function calc(num1 = 0, num2 = 0) {
    return `1. ${num1} + ${num2} = ${num1 + num2}
2. ${num1} - ${num2} = ${num1 - num2}
3. ${num1} x ${num2} = ${num1 * num2}
4. ${num1} / ${num2} = ${num1 / num2}`
}

console.log(calc(2, 5))