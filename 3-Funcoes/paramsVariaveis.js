function soma() {
  let soma = 0
  for(i in arguments){ // Array de params
    soma += arguments[i]
  }
  return soma
}

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, 'teste')) // Concatena
console.log(soma('a', 'b', 'c')) // 0abc