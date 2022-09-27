/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

const verificarString = (string1, string2) => {
    let estaContido = true
    let strings1 = string1.split(''),
    strings2 = string2.split('')
    // juntos = strings1.concat(strings2)
    
    strings1.forEach(a => {
        let caractereString1 = a.toLowerCase()

        strings2.forEach(a => {
            let caractereString2 = a.toLowerCase()
            
            caractereString1 == caractereString2 ? estaContido = true : estaContido = false
        })
    })
    
    return estaContido
}

console.log(verificarString('absdkaSA','ASmdnaslk'))
console.log(verificarString('ASmdnaslk','ASmdnaslk'))
console.log(verificarString('ASmdnaslk','AS'))
console.log(verificarString('as','AS'))
