const soma = array => {
    return array.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
}

console.log(soma([10, 10, 20]))