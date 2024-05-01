//vamos aprender como usar SetInterval, ele funciona tanto no node quanto no browser(navegador)



//=======================================================================================================================================================================

//vamos reutilizar o codigo acima usando função anonima:

function MostraHora01() {
    let data01 = new Date();
    return data01.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(function () {
    console.log(MostraHora01()); // Adicionando parênteses para invocar a função
}, 1000);

