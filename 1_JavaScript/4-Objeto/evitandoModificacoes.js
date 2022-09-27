// 1 - Object.preventExtensions = Pode ser modificado | Nao pode adicionar | Pode excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// 2 - Object.seal = Pode ser modificado | Nao pode adicionar nem excluir
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // true

pessoa.nome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Silva', idade: 29 }

// 3 - Object.freeze = selado + valores constantes 