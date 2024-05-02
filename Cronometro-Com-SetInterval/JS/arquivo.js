const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//vamos caputurar o evento de iniciar , pausar e zerar
//a função anonima so é executada quando ocorre o evento de click
//o evento e passado como argumento da função anonima
//vamos fazer isso para os 3 butões de iniciar, pausar e zerar
iniciar.addEventListener('click', function (e){
    alert('clickei no iniciar')
} );

pausar.addEventListener('click', function (e){
    alert('clickei no pausar')
} );

zerar.addEventListener('click', function (e){
    alert('clickei no zerar')
} )

