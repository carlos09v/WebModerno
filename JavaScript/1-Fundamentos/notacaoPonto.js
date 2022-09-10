console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' // Cria atributo
// obj1["nome"] = 'Bola2'
console.log(obj1.nome) // Bola

function Obj(nome){
    this.nome = nome // Atributo público
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj3.exec() // Exec...
