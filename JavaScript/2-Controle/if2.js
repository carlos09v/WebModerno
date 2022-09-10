function teste1(num){
    if(num > 7) // Está sem chaves. Ele condiciona so a primeira linha
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // Cuidado com ;
        console.log(num)
    }
}

teste2(6) // 6
teste2(8) // 8