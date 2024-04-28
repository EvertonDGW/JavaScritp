//vamos aprender como lançar e tratar erros usando:  try, catch e throw

//try significa tentar,ou seja, a traução seria: tente executar isso daqui (codigo), caso ocorra qualquer erro aqui (codigo) eu preciso que caia em outro bloco que é o catch

try {
    
    console.log(NaoExisto); //temos um erro aqui, porque NaoExisto não esta definido

}

// catch é quem vai receber o erro,ou seja, catch vai capturar o erro ocorrido

catch (erro) { //dentro do parenteses é voce que escolhe o nome.o nome definido dentro do parenteses é um variavel que vai ficar armazenado o erro ocorrido
    console.log('temos um problema');//aqui voce vai colocar o codigo que seja executado caso ocorra um erro
    console.log(erro);
}

//========================================================================================

//o throw serve para lançar um erro manualmente exemplo abaixo:

function soma (x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser numeros'); //quando usamos new Error, estamos criando um erro,ou seja, meio que estamos criando um erro personalizado
    }

    return x + y;
}

try {

    console.log(soma(1,2));
    console.log(soma('1',2));

}

catch (problema) {

    console.log(problema)

}


