const receberMelhorEstudante = obj => {
    const soma = array => array.reduce((a, b) => a + b)
    const media = array => soma(array) / array.length 
    const estudantesMedias = Object.entries(obj).map( obj => {
        const chave = 0,
        valor = 1

        return { nome: obj[chave], media: media(obj[valor])}
    })

    const estudantesOrdenados = estudantesMedias.sort( (a, b) => b.media - a.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))