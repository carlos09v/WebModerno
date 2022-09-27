// Var - tem escopo global e de função
var numero = 1
{
    var numero = 2 // Escopo global - Local só em função
    console.log('dentro =', numero)
}
console.log('fora =', numero)
