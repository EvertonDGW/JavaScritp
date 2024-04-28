/*
escreva uma função chamada epaisagem que recebe dois argumentos, largura e altura
de uma imagem (number). retorne true se a imagem estiver no modo paisagem 

esse exercicio serve para treinar a logica de programação

*/

function epaisagem(largura, altura) {
    return largura > altura //se a condição for verdadeira vai retorna true ou false
}
console.log(epaisagem( 1980, 720))

//================================================================================================================================================================================
// vamos criar o mesmo exemplo acima mas, vamos utilizar ARROW FUNCTION

                                                //condição
let epaisagem2 = (largura01, altura01) =>   largura01 > altura01
console.log(epaisagem2(2000,1000))