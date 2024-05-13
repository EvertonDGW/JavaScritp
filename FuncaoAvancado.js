
//quando declaramos funções dessa maneira aconte algo chamado (function hoisting)]
//ela nos permite chamar a função antes ou depois. exemplo:

falaOi() //chamando a função antes da declaração

function falaOi() {       //declarando a função
    console.log('oi')
}

falaOi()//chamando a função depois da declaração

//======================================================================================================================================================================

//observe que a função é executada mesmo não tendo parametro
//isso só é possivel quando voce declara/criar funções usando a palavra FUNCTION
//quando declaramos funções dessa maneira o javascript disponibiliza uma variavel chamada: arguments
//surge então uma duvida, para onde foi os argumentos: 'valor',1,2,3,4,5,6,7,8,9, ???
//como a função não tem parametro então os argumentos são jogados para dentro dessa variavel arguments
function funcao() {
    console.log(arguments) //tudo que foi passado como argumento esta dentro dessa variavel arguments. 
}

funcao('valor',1,2,3,4,5,6,7,8,9)

//======================================================================================================================================================================

function funcao02 (a, b= 2,c){
    console.log(a+b+c)
}
funcao02(2,undefined,20) //quando voce joga undefined como parametro o valor padrão usado para b sera 2