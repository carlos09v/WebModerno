const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
  if (x == 5) {
    break // Quebra o laço
  }
  console.log(`${x} = ${nums[x]}`) 
}

for(y in nums){
  if(y == 5){
    continue // Interrompe e vai pra próxima
  }
  console.log(`${y} = ${nums[y]}`)
}

// Não usar!!
externo: // Rótulo
for(a in nums){
  for(b in nums){
    if(a == 2 && b == 3) break externo // Condiciona a primera linha
    console.log(`Par = ${a},${b}`)
  }
}

console.log('Fim!')