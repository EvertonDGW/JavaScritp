//vamos criar a hora iniciando pelos segundos
function CriaHoraEmSegundos(segundos) {

    //o objeto Date recebe os valores em milissegundos e não em segundos, portanto vamos multiplica por mil --> 1000,ou seja, temos aqui 10000 milissegundos

    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,

        //abra seu browser(navegador) vá em inspecionar elemento --> console, voce vai ver que a hora esta sendo exibida como 21:00:10, queremos apenas os segundos, então precisa definir esse 21 para zero
        //para fazer isso usamos o comando TimeZone :'GMT' ou TimeZone :'UTC'
        //ambos comandos resolve esse problema. Lemebre-se de dar uma pesquisada mais afundo sobre TimeZone : UTC e GMT para entender melhor
        timeZone: 'UTC'
    });
}

// ***************************  a função CriaHoraEmSegundo basicamente vai criar a hora no formato 00:00:10 ***************************************************************************


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//quando iniciamos o cronometro e paramos em algum tempo por exemplo 00:00:07
//se voce clickar em iniciar novamente a contagem vai voltar de onde parou
//isso so  é possivel por causa da variavel timer

let segundos = 0;
let timer

function IniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = CriaHoraEmSegundos(segundos)

    }, 1000) //1000 milissegundos equivale a 1s

}

//vamos caputurar o evento de iniciar , pausar e zerar
//a função anonima so é executada quando ocorre o evento de click
//o evento e passado como argumento da função anonima
//vamos fazer isso para os 3 butões de iniciar, pausar e zerar

//Quando o botão "Iniciar" é clicado, ele limpa qualquer temporizador anterior usando clearInterval(timer) e, em seguida, inicia o cronômetro chamando IniciaRelogio().
iniciar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.classList.remove('pausado') //quando o cronometro for iniciado a cor vermelha é removida. esse nome (pausado) é uma class que criamos no css. ela e removida do html quando ocorre o evento de iniciar
    IniciaRelogio()
});

//Quando o botão "Pausar" é clicado, ele limpa o temporizador atual usando clearInterval(timer), interrompendo a contagem do cronômetro.
pausar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.classList.add('pausado') //quando o cronometro for pausado ele ficara vermelho. esse nome (pausado) é uma class que criamos no css. ela é adcionado no html quando ocorre o evendo de pausar

});

//Quando o botão "Zerar" é clicado, ele limpa o temporizador atual, redefine a variável de segundos para zero e atualiza o elemento HTML .relogio para exibir "00:00:00", reiniciando o cronômetro.
zerar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';

    //quando o botão zerar e clicado a variavel segundos precisa ser zero para evitar que ocorra o seguinte problema exemplo: vamos supor que voce pausa no tempo 00:00:25 e clicka em zerar,ou seja,
    //o cronometro fica 00:00:00 mas, quando voce clickar novamente em iniciar ele não começar do 00:00:00 e sim do 00:00:25 ou seja temos uma problema ai
    //então para resolver isso a variavel segundos precisar voltar a ser 0
    segundos = 0
});

