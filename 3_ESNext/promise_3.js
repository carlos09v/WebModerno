const gerarNumerosEntre = (min, max) => {
    if(min > max) {
        // Destructuring
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        try {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }catch(e) {
            reject(e)
        }
    })
}

gerarNumerosEntre(10, 30)
    .then(num => num * 10)
    .then(numX10 => `O número gerado multiplicado por 10 é = ${numX10}`)
    .then(console.log)
    .catch(err => console.log(err))