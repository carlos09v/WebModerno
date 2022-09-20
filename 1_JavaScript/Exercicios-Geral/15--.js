const numerosPares = array => {
    return array.filter((a , indice) => {
        const numeroPar =  a % 2 == 0
        const indicePar = indice % 2 == 0

        return numeroPar && indicePar
    })
}

console.log(numerosPares([1, 2, 3, 4]))
console.log(numerosPares([10, 70, 22, 43]))