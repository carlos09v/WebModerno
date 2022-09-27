// novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Destructing
console.log(nome , idade)

const { nome: n, idade: i} = pessoa // Desestruturar e atribuir á uma variável
console.log(n , i)

const {sobrenome , bemHumorada = true} = pessoa // undefined - true
console.log(sobrenome,bemHumorada)

const {endereço: { logradouro , numero , cep} } = pessoa // Rua ABC - 1000 - undefined
console.log(logradouro, numero, cep)

/*
const {conta: {login , senha}} = pessoa // Erro - conta undefined
console.log(login , senha)
*/