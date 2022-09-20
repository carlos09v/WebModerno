const filtrarQtndDigitos = (array, qtndDigito) => {
    return array.filter(n => {
        const qntdDigitos = String(n).length

        return qntdDigitos === qtndDigito
    })
}

console.log(filtrarQtndDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarQtndDigitos([12, 53, 2254, 222, 132, 2], 3))