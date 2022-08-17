//  Faça um algoritmo que calcule o fatorial de um número

const fatorial = num => {
    if (num == 0) {
        return 1
    }else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))
console.log(fatorial(2))
console.log(fatorial(3))