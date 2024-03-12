// Array é basicamente uma lista com varior elementos
// indice---->    0          1         2
const nome = ['Everton', 'Marcos', 'Felipe']; // para criar um array use colchetes
console.log(nome);
console.log(nome[0]);
console.log(nome[2]);

//=============================================================================================================================
//podemos trocar marcos por outro nome usando o comando abaixo:
nome[1] = 'Wukong'; //trocamos Marcos por Wukong
console.log(nome[1]);
console.log(nome);

//=============================================================================================================================
//oberserve que o nosso array nao tem o indice 3. podemos adicionar um novo elemento,assim criando o indice 3 exemplo abaixo:
nome[3] = 'Darius';
console.log(nome);

//=============================================================================================================================
//para descobrir o tamanho do seu array use length
console.log(nome.length);

//=============================================================================================================================
//podemos usar o comando push para adicionar elementos no final do array. exemplo abaixo:
nome.push('Demacia');
console.log(nome);

//=============================================================================================================================
//podemos usar o comando unshift para adicionar elementos no inicio do array. exemplo a baixo:
nome.unshift('Talon');
console.log(nome);

//=============================================================================================================================
//podemos usar o comando pop() para remover o ultimo elemento de um array. exemplo abaixo:
const removido = nome.pop();
console.log(nome);
console.log(removido); // vai exibir o elemento que foi removido

//=============================================================================================================================
//podemos usar o comando shift para remover um elemento no inicio do array. exemplo abaixo:
const removido2 = nome.shift();
console.log(nome);
console.log(removido2);// vai exibir o elemento que foi removido

//=============================================================================================================================
//podemos usar delete para remover um elemento do array sem alterar os indices.exemplo abaixo:
//quando usamos delete, o lugar onde esta o elemento fica vazio e aparece a seguinte mensagem: <1 empty item> indicando que esta vazio
//deletamos o darius
delete nome[3]; 
console.log(nome); 

//=============================================================================================================================
//se voce tentar alterar um elemento no seu que nao existe,ou seja, um indice que nao existe vai resultar em undefined. exemplo abaixo
console.log(nome[50]); //nao existe o indice 50 no nosso array

//=============================================================================================================================
nome.push('Warwick')
nome.push('Quinn');

//=============================================================================================================================
//podemos usar o comando slice(aqui dentro voce colocar os indices que voce quer) para exibir os elementos de um indice A ate B. EXEMPLO ABAIXO:
//dentro de slice() voce pode colocar o indice positivo ou negativo
console.log(nome)
let fatiamento = nome.slice(0,3);//vai exibir os elementos do 0 ate 3, mas sem incluir o 3,ou seja, vai mostrar os elementos dos indice 0, 1  e  2
console.log(fatiamento);



