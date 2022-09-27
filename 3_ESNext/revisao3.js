// ES8 (2017): Object.value/Object.entries
// 1
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // valores
console.log(Object.entries(obj)) // chave e valor

// 1.1 - Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente !'
    }
}
console.log(pessoa.nome, pessoa.ola()) // Carla Oi gente !

// 2 - Class
class Animal {}
class Cachorro extends Animal { // herança
    falar() {
        return 'Au au !'
    }
}
console.log(new Cachorro().falar()) // Au au !