const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){ // Função anônima
        console.log(i)
    })
}

funcs[2]() // Como var n tem escopo de bloco.R: 10
funcs[8]() // R: 10
