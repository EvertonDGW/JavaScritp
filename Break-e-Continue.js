//vamos aprender a como usar o break e continue
//usando continue
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {

        continue;//se a condição for verdadeira o numero 2 não sera exibido, isso acontece porque usamos o comando CONTINUE. apos ele pular o numero 2 a iteração continua normalmente
    }              // // ou seja, nesse exemplo quando usamos o CONTINUE o laço de repetição continua sendo executado
    console.log(numero) //o numero 2 não sera exibido
}

//=========================================================================================================================================================================
console.log('##############################');

//usando break
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let v of n) {
    if (v === 7) {
        break; // se a condição for verdadeira o 7 nao sera exibido por causar do BREAK e a iteração é interrompida, em seguida o break pula para o proximo bloco de codigo
            // ou seja, nesse exemplo quando usamos o BREAK o laço de repetição é interropido
    }

    console.log(v)
}

//obs: break e continue pode ser usado em qualquer estrutura de repetição

