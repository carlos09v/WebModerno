const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Pop = remove ultimo elemento
pilotos.pop()
console.log(pilotos)

// Push = adicionar no ultimo indice
pilotos.push('Verstappen')
console.log(pilotos)

// Shift = remove primeiro elemento
pilotos.shift()
console.log(pilotos)

// Unshift = adcionar no primeiro indice
pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice = exclui e adiciona elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar
console.log(pilotos)
pilotos.splice(3, 1) // remover
console.log(pilotos)

// Slice = retorna novo array a partir do indice
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) // 1 ate o 4 indice (sem pegar o 4)
console.log(algunsPilotos2)