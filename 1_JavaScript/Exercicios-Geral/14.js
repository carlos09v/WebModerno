const objParaArray = obj => {
    return Object.entries(obj)
}

console.log(objParaArray({
    nome: 'Paulo',
    profissao: 'Dev',
    idade: 21
}))