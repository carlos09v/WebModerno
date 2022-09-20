// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa) // Pedro

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'} // ERRO


Object.freeze(pessoa)

pessoa.nome = 'Maria' // Não consegue mais mexer no objeto dps do freeze
console.log(pessoa.nome) // Pedro


const pessoaConstante = Object.freeze( {nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante) // Joao