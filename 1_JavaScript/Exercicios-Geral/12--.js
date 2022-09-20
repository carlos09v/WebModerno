const removerPropriedade = (obj, propri) => {
    const copia = {...obj}
    delete copia[propri]
    return copia
}

console.log(removerPropriedade({nome: 'Joao', idade: 12}, 12))
console.log(removerPropriedade({
    id: 22,
    nome: 'Lapis',
    descricao: 'Não preenchido'
}, 'descricao'))