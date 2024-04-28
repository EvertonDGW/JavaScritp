//escreva uma função que recebe 2 numeros e retorne o maior deles
//esse exercicio serve para treinar a logica de programação
function MAX(x, y) {
    if (x > y) {
        return x; //se a condição for verdadeira retorne x, caso nao seja, retorna y
    }

    // else { --> não é necessario usar else, porque se a condição não for verdadeira ele vai retorna y
    return y;
    // }
};

let maior = MAX(5, 9);
console.log(maior)

//=====================================================================================================================================================================================

//vamos criar novamente o codigo acima mas, dessa vez vamos simplificar ele,ou seja, vamos reduzir o codigo

function MaiorNumero(numb1, numb2) {
    return  numb1 > numb2        ? numb1         : numb2; //usamos o operador TERNARIO
}           // condição           True            False
let Numero = MaiorNumero(1, 5);
console.log(Numero);


//=====================================================================================================================================================================================

//vamos criar novamente o codigo acima mas, dessa vez vamos simplificar ele,ou seja, vamos reduzir o codigo
//vamos usar ARROW FUNCTION
                                // condição  true   false
let maiornumero = (n1 , n2) =>  n1 > n2 ?     n1 :   n2;
console.log(maiornumero( 100, 20 ));

// basicamente (n1 , n2) é o parametro da função
// e o resultado do operador TERNARIO fica guardada dentro da variavel maiornumero
// ou seja, quando criamos esse tipo de função nao precisamos do return para guarda o resultado da função
//chamamos a função pelo nome da variavel que nos criamos
//quando criamos esse tipo de função nao precisamos usar o comando function e muito menos dar um nome para a nossa função
//ou seja, basta colocar o parametro da função