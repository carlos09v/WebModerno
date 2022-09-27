// Tratamento de Erro
const gerarNumerosEntre = (min, max, numerosProibidos) => {
    if(min > max) {
        // Destructuring
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        try {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numerosProibidos.includes(aleatorio)){
                reject('Número repetido !')
            }else {
                resolve(aleatorio)
            }
        }catch(e) {
            reject(e)
        }
    })
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)


async function gerarMegaSena(qtndNumeros) {
    try{
        const numeros = []
        // Gera valores
        for(let i of Array(qtndNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
    
        return numeros
    }catch(e) {
        throw 'Que chato!!! Teve número repetido :('
    }
   
}

gerarMegaSena(5)
    .then(console.log)
    .catch(console.log)