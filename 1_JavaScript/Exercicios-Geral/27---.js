const inverter = obj => {
    const paresDeChaveValorInvertidos = Object.entries(obj).map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter({ a: 1, b: 2, c: 3}))
console.log(inverter({ nome: 'João', idade: 13, endereco: `Rua Amendoim`}))