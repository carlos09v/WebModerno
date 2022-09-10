 /* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */

const triang = (num1 = 0, num2 = 0, num3 = 0) => {
    if( num1 == num2 && num2 == num3) {
        console.log('Os 3 lados são iguais, logo é um triângulo EQUILÁTERO !')
    }else if ( num1 == num2 || num2 == num3 || num1 == num3) {
        console.log('Tem 2 lados são iguais, logo é um triângulo ISÓSCELES !')
    }else {
        console.log('Todos os lados são diferentes, logo é um triângulo ESCALENO !')
    }
}

triang()
triang(2, 2, 5)
triang(3, 3, 3)
triang(1, 4, 9)