const funcaoDaSorte = num => {
    const randomNum = Math.floor(Math.random() * 10 + 1)
    return (randomNum === num ? `Parabéns! O número sorteado foi o ${randomNum} !` : `Que Pena, o número sortado foi o ${randomNum} !`)
}

console.log(funcaoDaSorte(6))
console.log(funcaoDaSorte(3))