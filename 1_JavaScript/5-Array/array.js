const lista = []
console.log(typeof lista) // object
console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // Undefined

// Length , push
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) // Tamanho - 5
aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false
console.log(aprovados)

// Sort = Ordenar
aprovados.sort()
console.log(aprovados)

// Delete
delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Bia

// Splice = exclui e adiciona elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Começa do indice ate onde termina - Exclui Carlos
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // Exclui Ana + adiciona elementos
console.log(aprovados)