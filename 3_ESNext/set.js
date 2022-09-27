// Estrutura de Conjunto
// nao aceita repetição/não indexada
// 1
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // n aceita repeticao

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // false
console.log(times.has('Vasco')) // true
times.delete('Flamengo')
console.log(times.has('Flamengo')) // false

// 2
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // Set(3) { 'Raquel', 'Lucas', 'Julia' }