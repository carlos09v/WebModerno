const nome = 'Maria'
const concatenacao = 'Olá ' + nome + '!' // Não pode quebrar linha
const template = `
    Olá
    ${nome}!` // Pode quebrar linha
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função
console.log(`Ei... ${up('cuidado')}!`)
