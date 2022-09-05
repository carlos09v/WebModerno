// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Não faça isso em casa !
Object.prototype.seiLa = 'NaoSei' // Não faça isso em casa !

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1) // A
console.log(filho.attr0) // 0
console.log(filho.attr) // undefined
console.log(filho.seiLa) // NaoSei

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowind - sombreamento - sobrescrita
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Linkar - Prototipar os objetos
Object.setPrototypeOf( ferrari, carro )
Object.setPrototypeOf( volvo, carro )

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status()) // V40: 200Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) // 300Km/h de 324Km/h