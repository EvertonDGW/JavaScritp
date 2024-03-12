//exercicio usando variaveis:trocar os valores das variveis, sem perde seus valores originais

let varA = 'a'; //  b
let varB = 'b'; //  c
let varC = 'c'; //  a

let temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);

/* ====================================================================================================================================================================== */

//outra forma de resolver o exercicio usando arrays


//let varA = 'a';
//let varB = 'b';
//let varC = 'c';

// Utilizando a desestruturação de arrays para trocar os valores das variáveis
// A ordem do array à direita determina a ordem em que os valores serão atribuídos às variáveis à esquerda
// Ou seja, varA receberá o valor de varB, varB receberá o valor de varC e varC receberá o valor de varA

//[varA, varB, varC] = [varB, varC, varA];

//console.log(varA, varB, varC);