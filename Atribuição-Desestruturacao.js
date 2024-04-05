//atribuição via desestruturação (array)
let A = 'a'; // queremos B dentro de A
let B = 'b'; // queremos C dentro de b
let C = 'c'; // queremos A dentro de c

const numeros = ['b', 'c', 'a']; //array

//desestruturação                atribuição
[A, B, C] = numeros;

console.log(A, B, C);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//indice                 0   1   2   3   4   5  6   7   8    9     10   11    12
const NumerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2000, 3000, 4000, 5000]; //criamos um array

// usamos a desestruturação para extrair valores de um array exemplo abaixo:
// o que esta sendo jogado é o indice
// quando usamos -->  ...resto vai pegar o resto dos elementos que estiverem dentro do array, ou seja, vai pegar os elementos que nao foram especificados
// o operador --> ... é chamado de REST e SPREAD, ou seja, ele tem DUAS funcionalidades
//quando pegamos o resto de alguma coisa, o operador ... se chama REST
//quando usamos  para distribuir/espalhar alguma coisa o operado ... se chama SPREAD

const [PrimeiroNumero, SegundosNumero, TerceiroNumero, QuartoNumero, QuintoNumero, SextoNumero, SetimoNumero, OitavoNumero, NonoNumero, ...resto] = NumerosInteiros;

console.log(PrimeiroNumero, SegundosNumero, TerceiroNumero, QuartoNumero, QuintoNumero, SextoNumero, SetimoNumero, OitavoNumero, NonoNumero);
console.log(resto)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//indice do array         0           1           2
//indice elementos     0  1  2    0   1  2    0   1  2
const NumerosBom = [ [10,20,30] ,[40,50,60] ,[70,80,90] ] //cada array tem um indice
console.log(NumerosBom[1]);//vai exibir o array do indice 1

//para exibir um elemento especifico dentro do array use:

console.log(NumerosBom[1][2])//vai exibir o elemento 60

//vamos usar a desestruturação para extrair o terceiro elemento do segundo array
//dentro de [,[,,sessenta]] as virgulas são usadas para criar espaços vazios, assim chegamos ate o numero sessenta
const [,[,,sessenta]] = NumerosBom;
console.log(sessenta)

//outra forma de usar a desestruturação usando o exemplo acima:

const [lista1, lista2, lista3] = NumerosBom; // os arrays ão ser jogador dentro das listas
console.log(lista2[2]) //vai exibir o numero 6


