//vamos aprender a usar o --> For Of
const nome = 'Everton';

for ( let i = 0; i < nome.length; i++) { //i é iteravel de nome, ou seja, a variavel i temporarimente assume o valor de cada elemento da variavel nome
    console.log(i)
    console.log(nome[i])
    console.log('=============================')
}

for (let valor of nome) { // quando usamos for of, ele vai exibir apenas o valor que estiver dentro da variavel, array vetor etc....,ou seja, o indice nao é exibido
    console.log(valor)
}
//concluimos que for in pega tanto o valor quanto o indice, for of pega apenas o valor,ou seja, ele ignora o indice