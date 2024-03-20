//interrompendo o evento de enviar o formulario
const formulario = document.querySelector('#form'); //selecionando o formulario por id
formulario.addEventListener('submit', function (e) { //dentro de (e) fica o evento de submit
    e.preventDefault(); // interrompe o recarregamento da pagina


    /* Quando o evento de submissão (submit) ocorre em um formulário, a função anônima associada ao evento é executada. Essa função anônima é definida como um argumento para o método addEventListener, e é chamada sempre que o evento especificado ocorre no elemento alvo. No caso do seu código, a função anônima é executada sempre que o formulário é submetido,ou seja,quando ocorre o evento 'submit', a função anônima é executada, e tudo isso está encapsulado como argumento do método addEventListener. */

    //target esta sendo usado para encontrar o id #peso e #altura quando o evento (e) acontece
    const InputPeso = e.target.querySelector('#peso');
    const InputAltura = e.target.querySelector('#altura');

    const peso = Number(InputPeso.value); //ai pegar o valor digitado pelo ususario e converte para number
    const altura = Number(InputAltura.value);

    //criamos essas função caso o usuario digite letra inves de numero. se ele digitar letra o javascript retorna NaN, ou seja, um valor FALSE

    //peso precisa ser difetente,ou seja, se peso for false a mensagem sera exibida. use o inspecionar elemento e va em console, agora digite um letra no formulario

    if (!peso) { // se o usuario digitar letra, o resto do codigo nao vai ser executado. agora se ele digitar um numero o codigo vai continuar normalmente e a função nao sera executada
        MostraResultado('peso invalido', false); //definimos um argumento avaliado em false que vai ser jogado como parametro na função MostraResulta que esta lá em baixo

        return; //quem decide se continua ou não é o return
    }

    //altura precisa ser difetente,ou seja, se peso for false a mensagem sera exibida. use o inspecionar elemento e va em console, agora digite um letra no formulario

    if (!altura) { // se o usuario digitar letra, o resto do codigo nao vai ser executado. agora se ele digitar um numero o codigo vai continuar normalmente e a função nao sera executada
        MostraResultado('altura invalido', false);//definimos um argumento avaliado em false que vai ser jogado como parametro na função MostraResulta que esta lá em baixo

        return; //quem decide se continua ou não é o return
    }

    const imc = GetImc(peso, altura);
    const NivelIMC = GetNivelImc(imc);

    const msg = `seu IMC é ${imc} ${NivelIMC}`;
    MostraResultado(msg,true);
    

    console.log(imc,NivelIMC);

});

function GetImc(peso, altura) {
    const imc = peso / altura ** 2; //primeiro é feito a altura elevada ao quadrado,
    return imc.toFixed(2);
}

function GetNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    //quando uma dessas condições for verdadeira o resto dos if não sera verificado

    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0]
    }

}


function CriaParagrafo() {
    const paragrafo = document.createElement('p')
    return paragrafo;
}

// isvalid esta analisando se os valores digitados em peso e altura são false ou true. então se o usuario digitar uma letra a mensagem é exibida se ele digitar um numero a mensagem nao sera exibida

function MostraResultado(mensagem, isValid) { //essa função so acontece quando o evento 'submit' acontece
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // vai limpar o que estava anteriormemte em --> resultado
    const paragrafo = CriaParagrafo();

    if (isValid){
     paragrafo.classList.add('paragrafo-resultado') //criamos uma class para o paragrafo criado chamada --> 'paragrafo-resultado'
     }
     else {
        paragrafo.classList.add('deuruim')

     }
     //criamos uma class para o paragrafo criado chamada --> 'paragrafo-resultado'

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo); //vai jogar o paragrafo criado dentro de --> resultado


}