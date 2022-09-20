const contarCaractere = (carac, string) => {
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i).toUpperCase() === carac.toUpperCase()){
            count++
        }
    }
    return count
}

console.log(contarCaractere('O', 'Oi me chamo'))
console.log(contarCaractere('a', 'Amendoim'))
console.log(contarCaractere('a', 'AaAa'))