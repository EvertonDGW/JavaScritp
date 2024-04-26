//vamos aprender a usar o --> For in
const frutas = ['maça','pera','uva'];
//vamos usar o for in no array frutas
for( let i in frutas) { //estamos lendo os indices do array frutas. p é iteravel do array frutas,ou seja, p esta assumindo temporariamente o valor de cada elemento
console.log(i)
console.log(frutas[i])
}
//conclusão o for in esta lendo os indices do array frutas

//================================================================================================================================================================================

//vamos usar o for in em um objeto
const pessoa = {
    nome:'everton',
    sobrenome:'roberto',
    idade:20
};
//quando usamos for in em um objeto estamos acessando as chaves que são --> nome , sobrenome e idade
for (let p in pessoa) { //p é iteravel do  objeto pessoa, ou seja, p esta temporariamente assumindo os valores das chaves e os valores referentes as chaves
    console.log(p)
    console.log(pessoa[p])
}

//conclusão quando for in é usado em um array ele acessa os indices dos elementos, quando usado em um objeto ele acessa as chaves desse objeto.