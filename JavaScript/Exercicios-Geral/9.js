const repetir = (num, repeat) => {
    let resul = []
    for(let i = 0; i < repeat; i++){
        resul.push(num)
    }
    
    return resul
}

console.log(repetir('oi', 5))