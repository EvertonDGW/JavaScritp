//estrura condicional switch

const agora = new Date(); // vai exibir a data e hora atual
console.log(agora.toString());
const data = agora.getDay();
console.log(data);

/*
0 --> domingo
1 --> segunda
2 --> terça
3 --> quarta
4 --> quinta
5 --> sexta
6 --> sabado 
*/

// switch é como se fosse a estrutura condicional IF, se a nossa variavel data for 5 por exemplo e o valor de case for igual a (data), ele vai executar os comando
//que estivem dentor desse case
//em outras palavras, estamos basicamente verificando se o valor de (data) é igual a 0, 1 ,2 ,3 ,4 ,5 ,6, caso nao seja ela executara default

switch (data) { //altere o valor aqui entre 0 e 6 e veja o resultado
    case 0:  // ----> case e como se fosse o if
        console.log('hoje é domingo')
        break; 

    case 1:
        console.log('hoje é segunda')
        break; //quando a condição verdadeira é achada, break vai impedir que os outros case sejam executados

    case 2: //se (data) for igual a 2 execute os comando abaixo até o break. é assim que se le quando usamos switch
        console.log('hoje é terça')
        break;

    case 3:
        console.log('hoje é quarta')
        break;

    case 4:
        console.log('hoje é quinta')
        break;

    case 5:
        console.log('hoje é sexta')
        break;

        case 6:
        console.log('hoje é sabado')
        break;

    default: // é como se fosse o else
        console.log('o valor inserido é invalido')
        break // break é um recurso obrigatório

}

//========================================================================================================================================================================

//vamos colocar o switch dentro de uma função. vamos reutilizar o codigo que esta em cima:

function DiaSemana(dia) {
    let EstamosEm;

    switch (dia) { 
        case 0:  
            EstamosEm = 'hoje é domingo,everton';
            return EstamosEm;
    
        case 1:
            EstamosEm = 'hoje é segunda,everton';
            return EstamosEm;
    
        case 2: 
            EstamosEm = 'hoje é terça,everton';
            return EstamosEm;
    
        case 3:
            EstamosEm = 'hoje é quarta,everton';
            return EstamosEm;
    
        case 4:
            EstamosEm = 'hoje é quinta,everton';
            return EstamosEm;
    
        case 5:
            EstamosEm = 'hoje é sexta,everton';
            return EstamosEm;
    
        case 6:
            EstamosEm = 'hoje é sábado,everton';
            return EstamosEm;
    
        default:
            EstamosEm = 'valor inválido';
            return EstamosEm;
    }
}

const hoje = new Date(); // aqui fica a data, incluindo ano, mês, dia, hora, etc.
const atual = hoje.getDay(); // estamos selecionando apenas o dia da semana, ou seja, de 0 a 6


//o return vai retorna o resultado do switch, para dentro da variavel diaDaSemana, porque é aqui que a função foi chamada

const diaDaSemana = DiaSemana(atual); // 'atual' é o nosso argumento, ele vai ser passado como parâmetro da função, ou seja, ele será atribuído ao parâmetro 'dia'


console.log(diaDaSemana);

