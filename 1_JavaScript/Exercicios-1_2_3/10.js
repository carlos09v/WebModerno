/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

const check3 = num => num % 3 == 0 ? true : false

console.log(check3(3)) // true
console.log(check3(5)) // false
console.log(check3(9)) // true