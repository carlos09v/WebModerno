/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const sacarDinheiro = valorSaque => {
    let contador100 = 0,
    contador50 = 0,
    contador10 = 0,
    contador5 = 0,
    contador1 = 0,
    valorNota = calcValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100    
                contador100 ++
                break
            case 50:
                valorSaque -= 50
                contador50 ++
                break
            case 10:
                valorSaque -= 10
                contador10 ++
                break
            case 5:
                valorSaque -= 5
                contador5 ++
                break
            case 1:
                valorSaque -= 1
                contador1 ++
                break
        }

        valorNota = calcValorNota(valorSaque)

    }

    return elaborarResu(contador100, contador50, contador10, contador5, contador1)
}

const calcValorNota = valorSaque => {
    if (valorSaque >= 100) {
        return 100
    }else if (valorSaque >= 50){
        return 50
    }else if(valorSaque >= 10) {
        return 10
    }else if (valorSaque >= 5){
        return 5
    }else if (valorSaque >= 1) {
        return 1
    }
}

const elaborarResu = (cont100, cont50, cont10, cont5, cont1) => {
    let resul = ''

    if (cont100 > 0) {
        resul += `${cont100} nota(s) de R$ 100 | ` 
    } 

    if (cont50 > 0) {
        resul += `${cont50} nota(s) de R$ 50 | `
    }

    if (cont10 > 0) {
        resul += `${cont10} nota(s) de R$ 10 | `
    }
    
    if (cont5 > 0) {
        resul += `${cont5} nota(s) de R$ 5 | `
    }

    if (cont1 > 0) {
        resul += `${cont1} nota(s) de R$ 1`
    }

    return resul
}

console.log(sacarDinheiro(168))
console.log(sacarDinheiro(1542))
console.log(sacarDinheiro(3))
console.log(sacarDinheiro(9))