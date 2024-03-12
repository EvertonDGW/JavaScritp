//function MeuEscopo() {
//   const form = document.querySelector('.formulario'); //para selecionar um elemento por class usamos ------> .(nome da class) por id -----> #(nome do id)
//    form.onsubmit = function (eventon) { //criamos uma função anonima, ou seja, ela nao tem nome. dentro do parametro evento é jogado o objeto onsubmit
//         //quanda ocorre o evento form.onsubmit a função anonima é executada
//        //quando queremos que um evento aconteça usamos sempre o ON na frente igual o onsubmit
//        eventon.preventDefault();
//        alert(1);
//        console.log('foi enviado')

//    };
//}

//MeuEscopo()

//Em resumo, esse código tem o propósito de selecionar um formulário na página, prevenir o envio padrão desse formulário quando ele é submetido(enviado),

//================================================================================================================================================================

//outra maneira de fazer o mesmo codigo que esta acima. exemplo abaixo

/* function escopo (){
    const form = document.querySelector('.form')
    function recebeeventoform(evento){
        evento.addEventListener()

    form.addEventListener
    }

    escopo()
 */

//================================================================================================================================================================

//exercicio usando o segundo metodo
//objetivo criar um formulario

function meuescopo() {
    // Seleção do elemento HTML do formulário
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const pessoas = []; // ----> array
    function recebeeventoform(evento) { //aqui dentro e jogado o evento que ocorre,ou seja, quando o evento submit ocorre ele e jogado como parametro da minha função

        // Prevenção do comportamento padrão de envio do formulário
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value, //estamos selecionando o valor digitado pelo usuario
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

        }) //observe que usamos a função push() e dentro dela criamos um objeto,ou seja ficou assim push({}) as chaves representam o objeto

        console.log(pessoas)

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }

    // Adição de um ouvinte de evento para o evento de submissão do formulário
    form.addEventListener('submit', recebeeventoform);

    /* No caso do código fornecido, form.addEventListener('submit', recebeeventoform); está dizendo ao navegador para escutar o evento de submissão ('submit') no elemento HTML representado pela variável form. Quando esse evento de submissão ocorre (por exemplo, quando o usuário clica no botão de envio do formulário), a função recebeeventoform será chamada e executada.
    O addEventListener() é responsável por estabelecer a conexão entre um evento específico e a função que será executada quando esse evento ocorrer. */

}

// Chamada da função `meuescopo()`
meuescopo();

