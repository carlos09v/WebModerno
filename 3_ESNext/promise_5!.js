// Tratamento de Erro
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            // con.log('temp') // Vai da ERRO

             // Ex: 0.3 = 30% de chance de Erro
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            }else {
                resolve(valor)
            }
        }catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5) // 50%
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`) // Tratamento Especifico
    )
    .then(() => console.log('Quase Fim !'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim !'))