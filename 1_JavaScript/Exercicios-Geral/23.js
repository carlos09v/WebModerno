const contePalavras = string => {
    const palavras = string.split(' ')
    return palavras.length
}

console.log(contePalavras('Oi me chamo'))
console.log(contePalavras('a a a a a'))