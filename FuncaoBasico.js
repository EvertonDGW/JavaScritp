// {} é o corpo da função
//saudacao() foi o nome que nos criamos para a nossa funcao
//nome e chamado de parametro,ou seja, definimos um parametro para a nossa funcao

function saudacao(nome) {  //everton vai ser jogado aqui
    console.log(`bom dia ${nome}`); //e sera exibido aqui
}

// chamando a função,ou seja, executando o que estiver dentro do corpo da minha função
// quando chamamos a funcao, o nome Everton vai ser jogado dentro do parametro nome
saudacao('Everton') ;

//podemos usar a funcao quantas vezes quisermos exemplo:

saudacao('darius');
saudacao('wukong');
saudacao('garen');
saudacao('demacia');
saudacao('quinn');
saudacao('roberto');

//====================================================================================================================================================================
function saudacao2(nome) {
    return `bom dia ${nome}`; // return vai retorna o resultado da sua função para a variavel resultado,ou seja, a saida da sua funcao vai ser guardada na variavel RESULTADO
    
}
const resultado = saudacao2('Everton Roberto');// ou seja dentro da variavel resultado esta `bom dia ${nome}`. isso acontece por causa do return
console.log(resultado);

//====================================================================================================================================================================
function soma(x,y) {
    const Resultadosoma = x + y
    return Resultadosoma //basicamente é o return que nos permite guarda o resultado de um funcao dentro de variaveis
}
console.log(soma(3,2));
console.log(soma(2,2));
console.log(soma(5,5));

//outra forma de fazer. exemplo abaixo:

function soma3(a,b) {
    const ResultadoOperacao = a + b;
    return ResultadoOperacao;
}
const ResultadoOperacao = soma3(8,8); //return vai guarda o resultado da funcao aqui
console.log(ResultadoOperacao);

//ATENÇÃO: quando usamos return estamos encerrando a execução da função,ou seja, estamos dizendo para o javascript ir ate onde o return esta,ou seja, se tivesse mais comandos abaixo de return eles nao vão ser executados

//====================================================================================================================================================================
//exemplo abaixo de como criar uma funçao anonima,ou seja, de como criar um função dentro de um variavel

const raiz = function (n) { //observe que nao criamos um nome para a nossa função. aquele parenteses é o parametro
    return n ** 0.5;
}; // quando criamos esse tipo de função voce deve colocar ponto e virgula aqui
console.log(raiz(25)); //observe que para chamar a função, usamos o nome da variavel. 25 é o valor que vai ser jogado dentro do parametro,ou seja, dentro de n
console.log(raiz(49)); 
console.log(raiz(100)); 

//====================================================================================================================================================================
//no exemplo abaixo temos outra forma de criar função chamada: arrow function
// basicamente (n) é o parametro da função
// e o resultado da operação n ** 0.5 é guardada dentro da variavel RaizQuadrada
// ou seja, quando criamos esse tipo de função nao precisamos do return para guarda o resultado da função
//chamamos a função pelo nome da variavel que nos criamos
//quando criamos esse tipo de função nao precisamos usar o comando function e muito menos dar um nome para a nossa função
//ou seja, basta colocar o parametro da função
const RaizQuadrada = (n) =>  n ** 0.5;

console.log(RaizQuadrada(225)); 
console.log(RaizQuadrada(64)); 
console.log(RaizQuadrada(81)); 