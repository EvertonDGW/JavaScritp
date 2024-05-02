//exibindo  a data e hora usando number
const data = new Date(2019,   3,  20, 15,   14,     20,        500);
                    //( ano ,mes,dia,hora,minuto,segundo, milessimo de segunos  )
console.log(data.toString());

//===========================================================================================

//exibindo  a data e hora usando string
const data2 = new Date('2024-03-24  17:10:28');
//     data       hora
console.log(data2.toString());

//===========================================================================================

//use o comando abaixo para exibir o ano, dia, mes, hora, minuto, segundo etc.....

console.log('dia', data.getDate());
console.log('mes', data.getMonth()); //mes começa sempre do --> 0
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia atual da semana', data.getDay()); // 0 --> domingo e 6 --> sabado
console.log(data.toString());


console.log(Date.now());
const atual = new Date(1711224971760);
console.log(atual);

//==============================================================================================================================================================================
console.log('############################################################################################################')


/* quando você cria um objeto Date sem passar nenhum argumento para o construtor,
ele representa a data e hora atual com base no fuso horário do sistema onde o código está sendo executado. Por exemplo: */

const dataAtual = new Date();
console.log(dataAtual);

//================================================================================================================================================================================


//Se você criar um objeto Date com um argumento de valor zero, como:

const dataZero = new Date(0);
console.log(dataZero);

//O resultado será uma representação da data "01/01/1970 00:00:00" no fuso horário local.
//O valor zero para um objeto Date representa exatamente essa data e hora.

/* Essa data de referência, "01/01/1970 00:00:00", é frequentemente usada para cálculos de tempo, como armazenar e manipular datas em milissegundos desde a época Unix. Isso é útil porque permite a representação de datas e horas como números inteiros, facilitando a manipulação matemática do tempo em sistemas computacionais. */