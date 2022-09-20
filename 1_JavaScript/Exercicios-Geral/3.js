const calcSalario = (horasTrabalhadas, recebeHora) => {
    return `Salário igual a R$ ${horasTrabalhadas * recebeHora} !`
}

console.log(calcSalario(65, 9.5))