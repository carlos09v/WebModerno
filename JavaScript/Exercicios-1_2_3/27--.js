/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

const timePass = (altu1, taxaCres1, altu2, taxaCres2) => {
    if (altu1 == altu2) {
        if (taxaCres1 > taxaCres2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        }else if (taxaCres1 < taxaCres2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else {
            return 'As crianças tem a altura e crescimento iguais.'
        }
    }else {
        if (altu1 > altu2) {
            if (taxaCres1 >= taxaCres2) {
                return 'A criança menor não ultrapassará a maior.'
            }else {
                return `A criança menor ultrapassará a maior em ${calcTempo(altu2, taxaCres2, altu1, taxaCres1)} anos.`
            }
        }else {
            if (taxaCres2 >= taxaCres1){
                return 'A criança menor não ultrapassará a maior.'
            }else {
                return `A criança menor ultrapassará a maior em ${calcTempo(altu1, taxaCres1, altu2, taxaCres2)} anos.`
            }
        }
    }
}

const calcTempo = (altuMenor, taxaCresMenor, altuMaior, taxaCresMaior) => {
    let qtdAnos = 0
    while (altuMenor < altuMaior) {
        altuMenor += taxaCresMenor
        altuMaior += taxaCresMaior
        qtdAnos ++
    }

    return qtdAnos
}

console.log(timePass(130, 5, 150, 2))
console.log(timePass(150, 2, 130, 4))
console.log(timePass(150, 2, 150, 4))
console.log(timePass(150, 5, 150, 5))