const buscarPalavrasSemelhantes = (str, array) => {
    return array.filter(a => a.includes(str))
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('java', ['javascript', 'java', 'c++']))