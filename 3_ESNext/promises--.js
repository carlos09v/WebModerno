// promessas - operação assincrona
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // aceita apenas um parâmetro
        }, segundos * 1000)
    })
}

// .then - acessar resultado da promessa
// .catch - tratar erro
falarDepoisDe(3, 'Que legal !')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))