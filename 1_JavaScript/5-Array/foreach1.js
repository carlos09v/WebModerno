const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// 1 - Parametros = Valor + Indice + Array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

// 2
aprovados.forEach(nome => console.log(nome))

// 3
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)