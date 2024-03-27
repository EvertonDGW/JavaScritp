/*

const h1 = document.querySelector('.container h1');
const data = new Date(); //estamos pegando a data e o horario atual


function DiaSemana(dia) {
    let NomeDoDia;

    switch (dia) {
        case 0:
            NomeDoDia = 'domingo';
            return NomeDoDia;

        case 1:
            NomeDoDia = 'segunda-feira';
            return NomeDoDia;

        case 2:
            NomeDoDia = 'terça feira';
            return NomeDoDia;

        case 3:
            NomeDoDia = 'quarta feira';
            return NomeDoDia;

        case 4:
            NomeDoDia = 'quinta-feira';
            return NomeDoDia;

        case 5:
            NomeDoDia = 'sexta-feira';
            return NomeDoDia;

        case 6:
            NomeDoDia = 'sabado';
            return NomeDoDia;

        default:
            NomeDoDia = 'valor invalido';
            return NomeDoDia;
    }
}

//o resultado dessa função retorna para onde ela foi chamada


//indices dos dias da semana:
//0 --> domingo
//1 --> segunda
//2 --> terça
//3 --> quarta
//4 --> quinta
//5 --> sexta
//6 --> sabado 


function DiaMes(Mes) {
    let NomeDoMes;

    switch (Mes) {
        case 0:
            NomeDoMes = 'janeiro';
            return NomeDoMes;

        case 1:
            NomeDoMes = 'fevereiro';
            return NomeDoMes;

        case 2:
            NomeDoMes = 'março';
            return NomeDoMes;

        case 3:
            NomeDoMes = 'abril';
            return NomeDoMes;

        case 4:
            NomeDoMes = 'maio';
            return NomeDoMes;

        case 5:
            NomeDoMes = 'junho';
            return NomeDoMes;

        case 6:
            NomeDoMes = 'julho';
            return NomeDoMes;

        case 7:
            NomeDoMes = 'agosto';
            return NomeDoMes;

        case 8:
            NomeDoMes = 'setembro';
            return NomeDoMes;

        case 9:
            NomeDoMes = 'outubro';
            return NomeDoMes;

        case 10:
            NomeDoMes = 'novembro';
            return NomeDoMes;

        case 11:
            NomeDoMes = 'dezembro';
            return NomeDoMes;


        default:
            NomeDoMes = 'valor invalido';
            return NomeDoMes;
    }
}

//o resultado dessa função retorna para onde ela foi chamada

 
//indices dos meses:
//Janeiro: 0
//Fevereiro: 1
//Março: 2
//Abril: 3
//Maio: 4
//Junho: 5
//Julho: 6
//Agosto: 7
//Setembro: 8
//Outubro: 9
//Novembro: 10
//Dezembro: 11 


//a função ZeroEsquerda vai resolver o problema da hora. exemplo:
// 21:1 --> percebe que falta o 0 zero, ou seja, a hora correta seria 21:01
//então a função vai resolver esse problema

function ZeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`; //condição ? true : false
}

function CriaData(data) {
    const DiaDaSemana = data.getDay();//pegando o indice do dia
    const NumeroDoMes = data.getMonth();//pegando o indice do mes

    const NomeDia = DiaSemana(DiaDaSemana);//chamando a função
    const NomeMes = DiaMes(NumeroDoMes);//chamando a outra função

    return (

        `${NomeDia}, ${data.getDate()} de ${NomeMes}` + //getDate() exibi o dia do mes
        ` de ${data.getFullYear()} ` +
        ` ${ZeroEsquerda(data.getHours())}:${ZeroEsquerda(data.getMinutes())}` //estamos passando a hora e minutos como paramento da função ZeroEsquerda,ou seja, esse valores vão ser jogados em (num)
    )


}


//o resultado da função CriaData retorna exatamente para onde ele foi chamada

h1.innerHTML = CriaData(data);

*/



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



// vamos fazer o mesmo codigo que esta em cima, usando outro metodo:

const h1 = document.querySelector('.container h1');
const data = new Date();// estamos pegando a data e horario atual

// Define as opções de formatação da data no formato completo
const opcoes = { //criamos um objeto chamado --> opcoes
    
    dateStyle: 'full' // esta pegando a data de forma completa, incluindo todos os detalhes disponíveis, como o dia da semana completo, o dia do mês, o nome completo do mês e o ano completo.
};

// Define o conteúdo HTML do elemento h1 para a data formatada no idioma Português do Brasil e adiciona também o horário

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes) + ' ' + data.toLocaleTimeString('pt-BR');

/*
O método toLocaleDateString() é usado para retornar uma representação da data (sem incluir a hora) como uma string, formatada de acordo com as preferências de localidade (idioma e opções culturais) do usuário.
ao chamar data.toLocaleDateString('pt-BR', opcoes), você está instruindo o navegador a formatar a data de acordo com as convenções de localização para o idioma Português do Brasil, utilizando as opções especificadas na variavel --> const opcoes.


O método toLocaleTimeString() é semelhante ao toLocaleDateString(), mas em vez de lidar com a parte da data, ele lida com a parte do tempo de um objeto Date, retornando uma string representando a hora, minutos, segundos e possivelmente o fuso horário, formatados de acordo com as preferências de localidade (idioma e opções culturais) do usuário.
Então, neste contexto, data.toLocaleTimeString('pt-BR') retorna uma string representando a hora atual formatada de acordo com as configurações culturais específicas do idioma Português do Brasil.

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX IMPORTANTE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Os comandos toLocaleDateString() e toLocaleTimeString() são chamados de METODOS do objeto Date. ou seja eles pertencem ao objeto Date.
METODOS são basicamente FUNÇÕES criadas dentro de OBJETOS.


  */





