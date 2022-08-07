// Voltando estudos em 03/08/2022

// Parametro com valor Default
function Carro(velociadeMaxima = 200, delta = 5) {
    // atrubito privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velociadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velociadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // 80