/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

const div = (dividendo = 0, divisor = 0) => {
    return `Resultado: ${dividendo} / ${divisor} = ${dividendo / divisor}
Resto: ${dividendo} % ${divisor} = ${dividendo % divisor}`
}

console.log(div(8, 4))
console.log(div(5, 15))
console.log(div(12, 6))