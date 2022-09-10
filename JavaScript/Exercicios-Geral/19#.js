const media = array => {
    return array.reduce((a, b) => a + b) / array.length
}

console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))