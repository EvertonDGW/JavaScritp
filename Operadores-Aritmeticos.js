// + soma e concatenação(juntar 2 valores)
// - subtração
// * multiplicação
// / divisão
// % resto da divisão
// ** potenciação
// != nao igual, exemplo ---> 4 != 4 ambos numero são iguais então é false
// == vai verificar se o valor e o tipo são iguais exemplo --> 5(number) == '5'(string), ambos possui o mesmo valor , mas o tipo é diferente logo FALSE
// ! significa negação, ou seja, NÃO
// && significa conjunção, ele pode ser lido como simplesmente --> e
// || significa disjunção, ele pode ser lido como simplesmente ---> ou
// ++ incremento,ou seja, vai adicionar uma unidade
// exemplo sobre incremento:
let contador = 1;
contador++;  // 2 . pos incremento,ou seja, primeiro vem a variavel, depois o operador ++
++contador; //  3 . pre incremento,ou seja, primeiro vem o operador ++, depois a variavel
console.log(contador)
/* ======================================================================================================================================================= */

// -- decremento,ou seja, ele remove uma unidade. exemplo logo abaixo
contador = 10;
contador--;
console.log(contador)

/* ======================================================================================================================================================= */
/* incremento de 2 em 2 */
let numero = 0;
numero += 2; // numero = numero + 2     .valor 2
numero += 2; // numero = numero + 2     .valor 4
numero += 2; // numero = numero + 2     .valor 6
numero += 2; // numero = numero + 2     .valor 8
numero += 2; // numero = numero + 2     .valor 10
console.log(numero) //ou seja numero esta com o valor 10

/* ======================================================================================================================================================= */
//convertendo string para number usando o comando a seguir. exemplo
// parseInt - converte para numero inteiro
// parseFloat converte para numero com virgula (ponto flutuante)
const num1= 10;
const num2 = parseFloat('5.5');
console.log(num1+num2);
console.log(typeof num2)
/* ======================================================================================================================================================= */

/* outra forma de converte string para number */
const nume1= 10;
const nume2 = Number('5.5'); //basta usar o comando Number com N maiusculo
console.log(nume1+nume2);
console.log(typeof nume2)