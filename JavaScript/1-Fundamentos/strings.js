const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // JS da menos erro q outra linguagem
console.log(escola.charCodeAt(3)) // Unicode
console.log(escola.indexOf(3))

console.log(escola.substring(1)) // Do 1 até o final
console.log(escola.substring(0, 3)) // Não inclui o índice 3

console.log('Escola '.concat(escola).concat('!')) // Concatenação
console.log('Escola ' + escola + '!') // Concatenação com +
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // Gera um Array