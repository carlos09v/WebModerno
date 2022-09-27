/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica.O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

const calculadoraBasic = (num1, oper , num2) => {
    switch (oper){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Erro, operação inválida !'
    }
}

console.log(calculadoraBasic(2 ,'*', 9))
console.log(calculadoraBasic(3 ,'+', 12))
console.log(calculadoraBasic(16 ,'-', 5))
console.log(calculadoraBasic(3 ,'!', 12))
