const filtrarNumeros = array => {
    return array.filter(a => typeof a === 'number')
}

console.log(filtrarNumeros(['Python', 'JavaScript', 5, '12', 'Web', 15]))
console.log(filtrarNumeros(['Python', 'JavaScript']))