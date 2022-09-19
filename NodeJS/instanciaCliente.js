const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Obj - Factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // 3 - salvou pois node faz cache

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // 1 - Nao salvou pq foram criadas nova instancias usando Factory