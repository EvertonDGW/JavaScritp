const InputTarefa= document.querySelector('.input-tarefa'); //selecionando o input
const BtnTarefa = document.querySelector('.btn-tarefa');//selecionando o button
const tarefas = document.querySelector('.tarefas');//selecionando o Ul

function CriaLi () {
    const Li = document.createElement('li') //dentro do parenteses voce especifica o elemento que voce quer que seja criado podendo ser um div, class, paragrafo, section etc..........
    return Li;
}

//capturando o evento de click do button 'adicionar tarefas'
//quando o usuario digita alguma coisa no input e em seguida aperta no botão adicionar tarefa, esse valor sera exibido em forma de lista
//mas se o usuario não digitar nada no input e em seguida clickar em adcionar tarefa, sera criado um espaçõ vazio, ou seja, uma string vazia ---> "  ", ou seja, temos um problema.
//lembre-se strings vazias são avaliados em falsy --->    "  "

function CriaTarefa(TextoInput) {
    //vamos criar um elemento do tipo lista (li) para cada tarefa adicionado pelo usuario
    const li = CriaLi(); //criando elemento do tipo lista (li)
    li.innerText = TextoInput
    tarefas.appendChild(li) //o valor digitado pelo usuario sera jogado dentro da lista não ordenada (Ul). que esta no nosso arquivo HTML
}

BtnTarefa.addEventListener('click',function () {
    //se o usuario digitar algo no input a função não executa mas, se ele não digitar nada dentro do input a função executa e o return faz com que a função pare de ser executada
    //impedindo que o codigo subsequente seja executdo
    //Portanto, essa função trata o caso em que o usuário não digitou nada no campo de entrada, evitando que o código dentro do if seja executado 
    if (!InputTarefa.value) return;
    CriaTarefa(InputTarefa.value)
});

//note que criamos duas variaveis denominadas li, essas variaveis estão em escopos diferentes, ou seja, por mais que elas tenham o mesmo nome elas são variaveis totalmente diferente e possui valores totalmente diferentes 