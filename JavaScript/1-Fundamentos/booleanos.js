let isAtivo = false
console.log(isAtivo)

isAtivo = true // Lembrando q let é possível mudar o valor
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Negação 2x = Not Not

console.log('os verdadeiros...')
console.log(!!3) // !! - Força a conversao pra boolean
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String vazia
console.log(!!null)
console.log(NaN) // Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // Se um for verdadeiro o resultado é true

let nome = 'Lucas'
console.log(nome || 'Deconhecido') // Se tiver vazio retorna Desconhecido
