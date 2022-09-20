const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){ // Função anônima
        console.log(i)
    })
}

funcs[2]() // Como let tem escopo de bloco.R: 2
funcs[8]() // R: 8
