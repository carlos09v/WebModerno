const esperarPor = (tempo = 1000) => {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh') // o .then vai ser chamado
        }, tempo)
    })
}

/*
esperarPor()
    .then(() => console.log('Execuntando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Execuntando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Execuntando promise 3...'))
*/

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 4000)
    })
}

// vira promise
async function retornarValorRapido() {
    return 20
}

// async - assincrono 
// await - esperar
async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    
    await esperarPor(1500)
    return `Async/Await ${valor + 3}...` // retorna em promise = resolve
}

executar().then(console.log)