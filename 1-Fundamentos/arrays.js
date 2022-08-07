// Array é Heterogênio - Aceita múltiplos valores (tipos)
const valores = [7.7,8.5,9.2,4.6]
console.log(valores[0], valores[3])
console.log(valores[4]) // Lembrando q JS da menos erro

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Deleta o último
delete valores[0]
console.log(valores)

console.log(typeof valores)
