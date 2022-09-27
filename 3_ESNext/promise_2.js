// 1 - Callback hell
setTimeout(function() {
    console.log('Executando callback 1...')

    setTimeout(function() {
        console.log('Executando callback 2...')
        
        setTimeout(function() {
            console.log('Executando callback 3...')

        }, 2000)
    }, 2000)
}, 4000)

// 2 -
const esperarPor = (tempo = 1000) => {
    return new Promise(resolve => {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhhh') // o .then vai ser chamado
        }, tempo)
    })
}

esperarPor() // espera 1seg
    .then(() => esperarPor()) // dps espera + 1seg
    .then(esperarPor)
    .then(v => console.log(v))