
//    variavel;    condição;      resultado
for  (  i = 0;      i <= 5;          i++   ) {
    console.log(`Linha ${i}`);
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const frutas = ['maça','uva','laranja'];

console.log(frutas.length)// vai exibir a quantidade de elementos,ou seja, --> 3

//os indices e os elementos do array frutas ficam guardados dentro de n
//o loop cria uma sequência de índices (n) para cada elemento do array frutas, permitindo que você acesse e manipule cada elemento individualmente dentro do loop.
for (let n = 0; n < frutas.length; n++) { 

            //indice dos elementos       vai exibir os elementos de acordo com seu indice criado
    console.log(    `indice${n}`                            ,frutas[n]);

}