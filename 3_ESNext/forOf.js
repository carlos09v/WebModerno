// 1 - ForOf - percorre valores
for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise', 'Async/Await']

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

// 1.1 - Usanco com Map
const assuntoMap = new Map([
    ['Map', { abordado: true } ],
    ['Set', { abordado: true } ],
    ['Promise', { abordado: false }],
    ['Async/Await', { abordado: false }]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

// Percorrendo chave
for (let chave of assuntoMap.keys()){
    console.log(chave)
}

// Percorrendo valor
for (let valor of assuntoMap.values()){
    console.log(valor)
}

// Destructuring
for(let [ch, vl] of assuntoMap.entries()){
    console.log(ch, vl)
}

// 1.2 - Usando com Set
const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}

// 2 - ForIn - percorre indice
for (let i in assuntosEcma) {
    console.log(i)
}
