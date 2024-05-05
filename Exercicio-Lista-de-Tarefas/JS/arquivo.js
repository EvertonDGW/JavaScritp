const InputTarefa= document.querySelector('.input-tarefa'); //selecionando o input
const BtnTarefa = document.querySelector('.btn-tarefa');//selecionando o button
const tarefas = document.querySelector('.tarefas');//selecionando o Ul

function CriaLi () {
    const Li = document.createElement('li') //dentro do parenteses voce especifica o elemento que voce quer que seja criado podendo ser um div, class, paragrafo, section etc..........
    return Li;
}

// vamos criar um codigo para quando digitar algo no input queremos que o botão ENTER adicione a tarefa na lista
// keypress significa -->  pressionar a tecla
// quando um tecla é pressionada ela gera um codigo(code) então --> e.keycode é o codigo gerado quando a tecla e pressionada. 13 é o codigo gerado quando ENTER é pressionado
// para verificar o codigo (keycode) da tecla pressionada voce precisa usar o console.log(e) para exibir a tecla pressionada
// em seguida no seu browser vá em  --> inspeionar elemento --> console.
//na palavra keyCode o --> C é a unica letra maiuscula
//conclusão estamos capturando o evento da tecla ENTER
InputTarefa.addEventListener('keypress',function (e) { 
     if (e.keyCode === 13) {

        console.log('enter pressionado');
        
    //se o usuario digitar algo no input a função não executa mas, se ele não digitar nada dentro do input a função executa e o return faz com que a função pare de ser executada
    //impedindo que o codigo subsequente seja executdo
    //Portanto, essa função trata o caso em que o usuário não digitou nada no campo de entrada, evitando que o código dentro do if seja executado 
        if (!InputTarefa.value) return;//

        CriaTarefa(InputTarefa.value)
     }
    
});

//quando o usuario digita algo no input e ele adiciona na lista de tarefas, o input continua com aquele valor digitado pelo usuario, exemplo: o usuario digitou 'Tomar Banho'
//quando ele enviar isso para lista de tarefas o input vai continua com essa tarefa escrita, ou seja, temos um problema.
//então para limpar o input apos o usuario adicionar uma tafera usaremos essa função:

function LimpaInput() {
    InputTarefa.value = '';

    //o método focus() é usado para dar foco a um elemento HTML específico, como um campo de entrada de texto (input), um botão ou um link, o que significa que esse elemento será selecionado automaticamente quando a página for carregada ou quando algum evento for acionado.
    //ou seja estamos dando foco no nosso input
    InputTarefa.focus();
};

//vamos criar uma função para apagar as tarefas adicionadas
 // o operador += chamado de concatenação vai juntar a tarefa adicionada + o botão apagar. aquela string 'VAZIA' serve para criar um espaço vazio entre eles
 //dentro dos parenteses voce deve especificar o elemento que ira ser criado podendo ser uma div, paragrafo, section etc......
 //conclusão: a tarefa é criada, em seguida um espaço em branco é criado em seguida o botão de apagar e criado tudo isso na mesma linha
function CriaBotaoApagar (li) {
    li.innerText += ' ' ;
    const BotaoApagar = document.createElement('button'); 
    BotaoApagar.innerText = 'apagar';
    BotaoApagar.setAttribute('class', 'apagar');//setAttribute é usado para atribuir algo no caso atribuimos ao nosso botão de apagar uma 'class' e o nome da nosso class é 'apagar'

    //estamos usando novamente o setAttribute para adicionar um title ao botão apagar.quando voce deixar o mouse em cima do botão apagar a mensagem 'botão de apagar tarefa' sera exibida
    BotaoApagar.setAttribute('title','botão de apagar tarefa')
    li.appendChild(BotaoApagar)

}




//capturando o evento de click do button 'adicionar tarefas'
//quando o usuario digita alguma coisa no input e em seguida aperta no botão adicionar tarefa, esse valor sera exibido em forma de lista
//mas se o usuario não digitar nada no input e em seguida clickar em adcionar tarefa, sera criado um espaçõ vazio, ou seja, uma string vazia ---> "  ", ou seja, temos um problema.
//lembre-se strings vazias são avaliados em falsy --->    "  "

function CriaTarefa(TextoInput) {
    //vamos criar um elemento do tipo lista (li) para cada tarefa adicionado pelo usuario
    const li = CriaLi(); //criando elemento do tipo lista (li)
    li.innerText = TextoInput;
    tarefas.appendChild(li); //o valor digitado pelo usuario sera jogado dentro da lista não ordenada (Ul). que esta no nosso arquivo HTML
    LimpaInput();
    CriaBotaoApagar(li);
    SalvarTarefas()
}

BtnTarefa.addEventListener('click',function () {
    //se o usuario digitar algo no input a função não executa mas, se ele não digitar nada dentro do input a função executa e o return faz com que a função pare de ser executada
    //impedindo que o codigo subsequente seja executdo
    //Portanto, essa função trata o caso em que o usuário não digitou nada no campo de entrada, evitando que o código dentro do if seja executado 
    if (!InputTarefa.value) return;
    CriaTarefa(InputTarefa.value)
});

//note que criamos duas variaveis denominadas li, essas variaveis estão em escopos diferentes, ou seja, por mais que elas tenham o mesmo nome elas são variaveis totalmente diferente e possui valores totalmente diferentes 


//criamos o botão de apagar no codigo acima
//agora vamos criar a funcionalidade de apagar a tarefa para o botão -----> APAGAR
//basicamente quando houver o evento de click sera exibido o elemento que foi clickado e suas caracteristicas seram mostradas. por exemplo:
//quando o usuario clickar no botão de apagar sera exibido o elemento que ele clickou e sera exibido tambem a CLASS e o TITLE que o nosso botão apagar possui
//para voce visualizar isso voce deve colocar o comando console.log(el) em seguida abra seu documento HTML vá em --> inspecionar elemento --> console
document.addEventListener('click',function (e) {
    const el = e.target;
    console.log(el);

    //o if esta verificando se o elemento que foi clickado possui a class 'apagar'
    //ou seja se o usuario clickar em algum elemento e esse elemento possuir uma class chamada 'apagar' então o codigo sera executado
    //no caso o nosso botão apagar possui essa class então se o usuario clickar no botão apagar a condição sera verdadeira e o codigo sera executado
    //quando usamos console.log(el.parentElement); vai exibir no console quem é o pai de determinado elemento
    //apos usar esse codigo descobrimos que quando o usuario adiciona uma tarefa essa tarefa fica dentro de uma lista ordenada(Li),ou seja, a lista ordenada(Li) é o pai da tarefa adicionada e do botão apagar
    if (el.classList.contains('apagar')) {
        console.log('apagar clickado')
        console.log(el.parentElement);

        //ou seja quando o nosso botão APAGAR é clickado seu pai é removida no caso a lista ordenada(Li) e junto dela é removido a tarefa adicionado eo botão apagar
        el.parentElement.remove();    }
});


//vamos criar uma função para salvar as tarefas adicionadas
//ou seja quando voce fechar o documento HTML e abri-lo novamente as tarefas adicionadas estaram salvas
//lembre-se tarefas é a nossa variavel que armazena a nossa lista nao ordenada (Ul) e dentro dela fica as listas ordenadas (Li) e dentra dela fica as tarefas adicionadas e o botão de apagar

function SalvarTarefas() {
    const LiTarefas = tarefas.querySelectorAll('li'); //dentro de ul estamos selecionando TODAS as listas ordenadas --> li,
    const ListaDeTarefas = []

    for (let tarefa of LiTarefas) {//agora vamos uma ITERAÇÃO para selecionar os valores que estão dentro das li, ou seja, vamos selecionar as tarefas adicionados

        //usamos o inspecionar elemento e descobrimos que ao utilizar console.log(tarefa.innerText). a tarefa esta sendo exibido e o botão de apagar esta ao lado da tarefa,exemplo:
        // **** tomar banho apagar ********
        //ou seja, temos uma problema. para resolver o problema usaremos o seguinte comando:

        let TarefaTexto = tarefa.innerText; //dentro de tafera.innerText  esta a tarefa adicionada e o botão apagar semelhante ao exemplo ACIMA

        //o comando replace server para substituir uma string por outro, ou seja, vamos substituir a string 'apagar' por nada -->'  ', ou seja, um espaço vazio
        //o comando trim serve para tirar espaços desnecessarios que ficam na ponta de um array exemplo: com o trim --->['everton', 'roberto']  ****** sem o trim()---> ['everton ', 'roberto ']
        TarefaTexto = TarefaTexto.replace('apagar', ''); 

        //O método push() é usado para adicionar um ou mais elementos ao final de um array
        //ou seja, as tarefas vão ser armazeadas dentro do array ---> ListaDeTarefas
        ListaDeTarefas.push(TarefaTexto) 
        console.log(ListaDeTarefas);
    }
}




    

    


        