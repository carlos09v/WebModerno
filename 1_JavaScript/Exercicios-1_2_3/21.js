/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const valorPlanoSaude = idade => {
    let taxaFixa = 100
    // Ternário
    return idade <= 10 ? taxaFixa + 80
    : idade <= 30 ? taxaFixa + 50
    : idade <= 60 ? taxaFixa + 95
    : taxaFixa + 130
}

console.log(valorPlanoSaude(5))
console.log(valorPlanoSaude(10))
console.log(valorPlanoSaude(50))
console.log(valorPlanoSaude(30))
console.log(valorPlanoSaude(61))