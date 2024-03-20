//interrompendo o evento de enviar o formulario
const formulario = document.querySelector('#form'); //selecionando o formulario por id
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // imterrompe o recarregamento da pagina
    console.log('evento parado');

    MostraResultado('KAKAROTO'); // estamos chamando a função de baixo e jogando o argumento 'kakaroto' no parametro (mensagem)

    /* Quando o evento de submissão (submit) ocorre em um formulário, a função anônima associada ao evento é executada. Essa função anônima é definida como um argumento para o método addEventListener, e é chamada sempre que o evento especificado ocorre no elemento alvo. No caso do seu código, a função anônima é executada sempre que o formulário é submetido,ou seja,quando ocorre o evento 'submit', a função anônima é executada, e tudo isso está encapsulado como argumento do método addEventListener. */
})

function MostraResultado(mensagem) { //essa função so acontece quando o evento 'submit' acontece
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // vai limpar o que estava anteriormemte em --> resultado
    const p = document.createElement ('p');// aqui esta sendo criado um elemento do tipo paragrafo. esse elemento esta sendo jogado na variavel -->  const p
    p.classList.add('paragrafo-resultado');// aqui estamos criando uma class chamada ('paragrafo-resultado') para --> p
    p.innerHTML = 'qualquer coisa'; //a string esta sendo jogando dentro do paragrafo criado
    resultado.appendChild(p) //esse comando faz com que o paragrafo criado seja jogado na variavel --> resultado



}