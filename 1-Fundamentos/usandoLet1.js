// Let - tem escopo global , de função e bloco
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // Dá preferência ao escopo menor
}
console.log('fora =', numero)
