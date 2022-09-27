// Process
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    // saida padrão
    process.stdout.write('Fala anônimo :) !\n')
    process.exit()
}else {
    process.stdout.write('Informe o seu nome: ')
    // entrada padrão
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    }) // Quando você responder
}

// pelo Terminal
// node entradaESaida.js -a | true
// node entradaESaida.js -b | false