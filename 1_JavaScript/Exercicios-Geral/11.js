const primElemento = array => {
    return [array[0], array[array.length - 1]]
}

console.log(primElemento([7, 21, 3, 'Oi']))
console.log(primElemento([2, 9, 'Tudo bom?']))