try {
    console.log(a);//essa variavel a não existe,ou seja, o erro esta aqui

    //pelo fato de ocorre um erro as 3 linhas de codigos abaixo não seram executadas
    console.log('abri um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');

}

catch (e) { //catch vai capturar o erro ocorrido no TRY em seguida ira tratar esse erro.dentro do parateses fica a variavel que armazena o erro
    console.log('temos um erro');
    //console.log(e) //vai exibir o erro capturado


}

//tanto faz se houver erro ou não o FINALLY SEMPRE sera executado
//vamos supor que voce abra um arquivo e no decorre do caminho desse arquivo ocorre algum erro
//e voce ESQUECE de FECHAR esse arquivo, então voce pode usar o FINALLY para fechar esse arquivo ou pelo menos tentar fechar ele usando o FINALLY  
finally {
    console.log('FINALLY: eu sempre sou executado');
}

//=======================================================================================================================================================================================

console.log('###########################################')

//vamos criar uma função para garantir que o parametro da minha função seja um objeto Date
//se o argumento passado para o parametro data for uma instancia do tipo Date então retorna TRUE
//mas se o argumento passado não for uma instacia do tipo Date ele retorna FALSE

//O operador instanceof é usado para verificar se um objeto é uma instância de um determinado tipo. Ele retorna verdadeiro se o objeto é uma instância do tipo especificado; caso contrário, retorna falso.
//o operador Not --> (!) que significa inversão, ele é utilizado para inverte o resultado da expressão --> (data instanceof Date), ou seja, se o resultado da expresão for true fica false se for false fica true

function RetornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('não é um objeto Date');

    }

}

console.log(RetornaHora(new Date));

//=====================================================================================================================================================================================
console.log('###########################################')

//vamos reutilizar a função criado acima para criar um exercicio com: TRY , CATCH , THROW E FINALLY

//throw lança um erro. new é utilizado para lançar o tipo de erro


function RetornaHora01(data1) {

    //nossa função esta verificando 2 condições
    //na primeira condição: estamos Verificando se data1 é um valor que não seja nulo, indefinido ou vazio. ou seja, se data1 for falsy (ou seja, null, undefined, 0, "", etc.) retorna FALSE, então ocorre um erro. porque estamos usando o operador END --> && e embas condições devem ser verdadeiras
    //na segundo condição: estamos verificando se o argumento passado para a função é um objeto de instancia do tipo Date
    

    if (data1 && !(data1 instanceof Date)) {
        throw new TypeError('esperando a instancia de date'); //caso ocorro um erro a mensagem sera exibida. TypeError é usado para lançar erros, quando um valor e de um tipo inesperado

        //lembre-se caso o erro seja lançado a execução do bloco de código atual é interrompida e o controle do fluxo é transferido para o primeiro bloco catch

    }

    if (!data1) { //caso o valor inserido seja nulo,vazio etc.. o operado NOT --> (!) vai inverter esse valor para true 
        data1 = new Date();
    }

    //é obrigatorio que em 'pt-BR' --> BR sempre tem que ser escrito em letras maiusculas
    //hour,minute,second e hour12 estão dentro de um objeto --> {}
    return data1.toLocaleTimeString('pt-BR', {

        hour: '2-digit',//vai corrigi o erro da hora ser exibida como 6:30 para --> 06:30
        minute: '2-digit',// vai corrigi o erro dos minutos serem exibidos como 10:2 para __> 10:02
        second: '2-digit',//vai corrir o erro dos secundos serem exibidos como 15:20:7 para --> 15:20:07 
        hour12: false // vai colocar a hora no modo de 24 horas

    }

    );
}

try {
    const data02 = new Date('01-01-2042 22:23:12') //***************** AQUI ESTA A INSTANCIA DE DATE. ****************************
    const hora = RetornaHora01(11) //se voce colocar a instancia de Date como ARGUMENTO DA FUNÇÃO o codigo não lançara nenhum erro, mas se voce colocar qualquer coisa diferente de new date o erro sera LANÇADO
    console.log(hora)
}

catch (e) { //vai capturar o erro ocorrido para dentro da variavel --> (e)
    //AQUI VOCE VAI TRATAR O ERRO OCORRIDO DA MANEIRA QUE VOCE QUISER
    console.log(e)
}

//o FINALLY garante que o código contido nele seja executado, independentemente de ocorrerem exceções no bloco try ou no bloco catch. Isso é útil para garantir que certas tarefas, como a liberação de recursos ou a execução de ações finais, sejam realizadas, mesmo em situações de erro.OU SEJA, na vida sempre coloque FINALLY no final

finally{
    console.log('BAZINGA')
}





