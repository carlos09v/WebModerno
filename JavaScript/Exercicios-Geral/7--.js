const estaEntre = (num, min, max, inclusivo = false) => {
    return inclusivo ? num >= min && num <= max : num > min && num < max
}

console.log(estaEntre(50, 10, 100))
console.log(estaEntre(160, 16, 100))