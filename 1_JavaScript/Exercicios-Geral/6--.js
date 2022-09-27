const inverso = algo => {
    if(typeof algo == 'boolean') {
        return !algo
    }else if(typeof algo == 'number'){
        return -algo
    }else {
       return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof algo}`
    }
}

console.log(inverso(false))
console.log(inverso(true))
console.log(inverso(10))
console.log(inverso(-20))
console.log(inverso(-1515))
console.log(inverso('sia'))