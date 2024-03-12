let n1 = 1 ;  //number
let n2 = 2.5;  //number

console.log(n1 + n2); // saida --> 3.5
console.log(n1.toString() + n2); //saida --> 12.5, porque convertemos o n1 para string durante a execução do comando,ou seja, n1 é convertido para string temporariamente
console.log(typeof n1); // mas n1 continua sendo um number

//se voce quiser converte definitivamente um number para uma string use o comando a seguir:
n1 = n1.toString();
console.log(typeof n1); // saida --> string

//=========================================================================================================================================================

//podemos usar o toString para conver um numero para binario exemplos abaixo:
let num1 = 1500;
console.log(num1.toString(2)); // o numero 2 representa numero binario 0 e 1

//=========================================================================================================================================================

//podemos usar toFixed para escolher a quantidade de casas decimais a serem exibidas, exemplo abaixo:
let numero = 10.3443873487438734;
console.log(numero.toFixed(2)) //o numero 2 repesenta a quantidade de casas decimais que vão ser exibidas

//=========================================================================================================================================================

//podemos usar o comando Number.IsInterger(nome da variavel) para verificar se o valor dentro da variavel é um numero inteiro.exemplo abaixo:
let numero1 = 10  //coloque um numero com virgula para voce ver na pratica
console.log(Number.isInteger(numero1)) // se for inteiro vai retorna TRUE, se nao for vai retorna FALSE

//=========================================================================================================================================================

//podemos usar o comando Number.isNaN(nome da variavel) para verificar se a operação é NaN, ou seja, para saber se tem algum erro. exemplo abaixo
let soma = 3 * 'casa'; //nao tem como o numero 3 multiplicar uma string logo a saida é --> NaN,ou seja, a conta é invalida
console.log(Number.isNaN(soma)) //se houver erro retorna TRUE se nao houver retorna FALSE

//=========================================================================================================================================================

let nume1 = 0.7;//number
let nume2 = 0.1;//number

nume1 += nume2; //nume1 = nume1 + nume2. saida --> 0.8
nume1 += nume2; //nume1 = nume1 + nume2. saida --> 0.9
nume1 += nume2; //nume1 = nume1 + nume2. saida --> 1.0

//voce percebe que o resultado foi 0.999999999999999999999 é nao 1.0, ou seja, dentro do javascript houve uma imprecisão
//ou seja temos um prolema em nossas maõs
//ATENÇÃO: para resolver esse problema use o comando a seguir. exemplo abaixo:

nume1 = parseFloat(nume1.toFixed(2))// basicamente transformando ele para um numero real,ou seja, o resultado vai ser 1
//voce pode usar tambem esse outra comando para resolver o mesmo problema. exemplo abaixo:
//nume1 = Number(nume1.toFixed(2)) 

console.log(nume1);// saida 0.9999999999999999
console.log(Number.isInteger(nume1));// retorna FALSE porque nume1 nao é um numero inteiro

//=========================================================================================================================================================

//outro metodo para resolver o problema anterior:
let valor1 = 0.7
let valor2 = 0.1

valor1 = ((valor1 * 100) + (valor2 * 100)) / 100; //0.8 . mas dessa vez nao havera imprecisão
valor1 = ((valor1 * 100) + (valor2 * 100)) / 100; //0.9 . mas dessa vez nao havera imprecisão
valor1 = ((valor1 * 100) + (valor2 * 100)) / 100; // 1 .  mas dessa vez nao havera imprecisão

console.log(valor1)
console.log(Number.isInteger(valor1));

