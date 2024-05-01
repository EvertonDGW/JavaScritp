//vamos aprender como usar SetInterval, ele funciona tanto no node quanto no browser(navegador)

/*

function mostrahora() {
    let data = new Date();
    return data.toLocaleTimeString('pe-BR',{
        hours12: false
    })
}

function funcaoInterval () {
    console.log(mostrahora());
}

*/

//basicamente setinterval executa o codigo em um determinado intervalo de tempo
//setinterval esta executando a função por referencia então não é necessarrio coloca os paratensteses na função --> funcaoInterval()m
//1000 é 1s, ou seja, a função e executado pelo SetInterval a cada 1s

            //valor por referencia       //intervalo de tempo em milissegundos

//setInterval(    funcaoInterval          ,         1000) ;


//=======================================================================================================================================================================

//vamos reutilizar o codigo acima usando função anonima e a usar o SetTimeOut junto com SetInterval

function MostraHora01() {
    let data01 = new Date();
    return data01.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const time = setInterval(function () {//função anonima
    console.log(MostraHora01()); // Adicionando parênteses para invocar a função
}, 1000);


//basicamente o comando SetTimeOut esta sendo usado para encerrada a execução do SetInterval quando chegar em 10 segundos?
//10000 e equivalente a 10s,ou seja, quando passar 10s o codigo é encerrado

setTimeout (function () {
    clearInterval(time) // clearInterval é usada para cancelar a execução repetida de código que foi iniciada por setInterval
}, 10000) //o intervalo de tempo é em milissegundos

