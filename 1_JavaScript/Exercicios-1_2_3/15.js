/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”. */

const modeloCarro = carro => {
    switch (carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo ?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui !'
    }
}

console.log(modeloCarro('sedan'))
console.log(modeloCarro('suzuki'))
console.log(modeloCarro('limousine'))
console.log(modeloCarro('hatch'))