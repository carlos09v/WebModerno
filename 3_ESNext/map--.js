// 1
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('angular').framework) // true

// 2
// chave + valor
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // 2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)