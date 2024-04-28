/* 
- escreva uma função que recebe um numero e
- retorne o seguinte:
- numero é divisivel por 3 = fizz
- numero é divisivel por 5 = buzz
- numero é divisivel por 3 e 5 = retorna o proprio numero
- numero não é divisivel por 3 e 5 = retorna o proprio nuero
- checar se o numero é realmente um numero = retorna o proprio numero
- use a função com numeros de 0 a 100

- esse exercicio serve para treinar a logica de programação 
 */

// Definição da função FizzBuzz que recebe um número como argumento
function FizzBuzz(numero) {

    // Verifica se o tipo de entrada não é um número
    if (typeof numero !== 'number') return numero; //se numero for do tipo number então sera false se não for um number sera true

    // Verifica se o número é divisível por 3 e 5, se sim, retorna 'FizzBuzz'
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';

    // Verifica se o número é divisível apenas por 3, se sim, retorna 'Fizz'
    if (numero % 3 === 0) return 'Fizz';

    // Verifica se o número é divisível apenas por 5, se sim, retorna 'Buzz'
    if (numero % 5 === 0) return 'Buzz';

    // Se o número não for divisível por 3, por 5 ou por ambos, retorna o próprio número
    return numero;
}

// Loop de 0 a 100 para verificar e imprimir os resultados de FizzBuzz
for (let i = 0; i <= 100; i++) {
    // Chama a função FizzBuzz para cada número no loop e imprime o resultado no console
    console.log(FizzBuzz(i));
}