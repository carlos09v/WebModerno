const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preço = 4550.99
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90
}
console.log(prod2)

'{ "nome": "Camida Polo", "preço": 79.90 }' // JSON - Formato textual de um objeto
