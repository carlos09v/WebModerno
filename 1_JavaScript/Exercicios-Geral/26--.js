const semVogais = string => {
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    vogais.forEach(vogal => string = string.replace(vogal, ''))
    return string
}

console.log(semVogais('Cod3r'))
console.log(semVogais('Fundamentos'))