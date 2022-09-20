/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */

const conceituNotas = vetorNotas => {
    let conceito = []
    vetorNotas.forEach(a => {
        if(a >= 0 && a <= 4.9){
            conceito.push('D')
        }else if (a >= 5 && a <= 6.9){
            conceito.push('C')
        }else if (a >= 7 && a <= 8.9){
            conceito.push('B')
        }else if (a >= 9 && a <= 10){
            conceito.push('A')
        }else {
            conceito.push('Fora do padrão')
        }
    });

    return conceito
}

console.log(conceituNotas([2, 3, 5, 11, 0, 8]))