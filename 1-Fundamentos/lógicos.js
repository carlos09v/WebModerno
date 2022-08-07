function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // or
    const comprarTv50 = trabalho1 && trabalho2 // and
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel = !comprarSorvete // Negação Lógica - Operador Unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // Objeto Inteligente - omite a chave
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))