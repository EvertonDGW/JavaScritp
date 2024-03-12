//podemos usar Math.floor para arredonda o numero para baixo no caso vamos ter n2 = 9
let n1 = 9.899999;
let n2 = Math.floor(n1);
console.log(n2);

//=======================================================================================================================================

//podemos usar Math.ceil para arredonda o numero para cima no caso vamos ter n3 = 10
let n3 =Math.ceil(n1);
console.log(n3);

//=======================================================================================================================================

//quando usamos Math.round ele vai arredonda para cima ou para baixo vai depender do valor do numero no caso 9.899999 esta mais proximo de 10, então ele vai arredonda para cima
let n4 = Math.round(n1);
console.log(n4);

//=======================================================================================================================================

//podemos usar Math.max(sequencia de numeros ou qualquer outra coisa) para verificar qual é o elemento com maior valor. exemplo abaixo:
console.log(Math.max(1,2,3,4,5,6,-89,-100,-50,100,50,88,1000)); // saida ---> 1000 é o maior valor

//=======================================================================================================================================

//podemos usar Math.min(sequencia de numeros ou qualquer outra coisa) para verificar qual é o elemento com menor valor. exemplo abaixo:
console.log(Math.min(1,2,3,4,5,6,-89,-100,-50,100,50,88,1000)); // saida --> -100 é o menor valor

//=======================================================================================================================================

//podemos usar o Math.random() para gerar numeros aleatorios
//quando nao colocamos nada dentro do parenteses ele vai gerar um numero entre 0 e 1, mas sem incluir o 1, ou seja, vai gerar um numero quebrado como --> 0.74378648743 
//10 - 5 = 5 ou seja o valor gerado vai ser entre 0 e 5. esse 0 e do random
//mas quando adcionamos aquele +5, estamos somando 5+5=10
//ou seja o numero gerado vai ser entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //o numero gerado vai ser um numero quebrado, então usamos Math.round para arredondar esse numero
console.log(aleatorio);

//=======================================================================================================================================

//podemos usar Math.pow(numero,expoente) para calcular um numero elevado a um determinado expoente. exemplo abaixo

console.log(Math.pow(2,10));
console.log(2**10); //outra forma de fazer

//=======================================================================================================================================

//podemos usar Math.sqrt(numero que voce que calcular a raiz quadrada) para calcular a raiz quadrada de um numero

let numero = 9
console.log(numero ** (1/2)); //formula para calcular a raiz quadrada de um numero. saida --> 3
console.log(numero ** 0.5); // outra forma de fazer. saida ---> 3
console.log(Math.sqrt(numero)) //outra forma de calcular a raiz quadrada

//=======================================================================================================================================

//IMPORTANTE
//é impossivel dividir por 0 isso nao existe, mas no javascript existe
//quando isso acontece gera um operador aritmetico chamado INFINITY e a operação feita e classificada como TRUE (verdadeiro)
console.log(100/0); // saida ---> infinity