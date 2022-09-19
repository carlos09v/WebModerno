require('./global')
// PERIGO !
// Global = pode ser acessado e mudado em qlquer lugar
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // Eita !

// usar o .freeze para n ser mudado !
/*
globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares !'
    },
    nome: 'Sistema Legal'
})
*/