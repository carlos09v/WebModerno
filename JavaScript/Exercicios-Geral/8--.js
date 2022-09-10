const multiplicar = (num1, num2) => {
    let resul = 0
    for(let i = 0; i < num2; i++){
        resul += num1
    }
    return resul
}

console.log(multiplicar(5, 3))