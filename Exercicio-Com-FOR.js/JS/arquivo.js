//OBJETIVO: usar a estrutura de repetição FOR para adcionar textos em suas tags 

const elementos = [ //array
    {tag : 'p', texto:'frase 1'}, //objeto
    {tag : 'div', texto:'frase 2'}, //objeto
    {tag : 'footer', texto:'frase 3'}, //objeto
    {tag : 'section', texto:'frase 4'}, //objeto
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {//cria indices para cada objeto
    let { tag ,texto } = elementos[i];// tag e texto vai extrair os valores do array elementos
    let TagsCriadas = document.createElement(tag); //criado as tags p , div, footer e section
    TagsCriadas.innerHTML = texto;//voce pode substituir innerHTML por --> innerText 
    div.appendChild(TagsCriadas); //estamos colocando as tags criadas dentro de uma div
    
}

container.appendChild(div);// estamos jogando a div criada dentro da nossa class container

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//outra forma de fazer. exemplo logo abaixo:


/* 

const elementos = [ //array
    {tag : 'p', texto:'frase 1'}, //objeto
    {tag : 'div', texto:'frase 2'}, //objeto
    {tag : 'footer', texto:'frase 3'}, //objeto
    {tag : 'section', texto:'frase 4'}, //objeto
];
const container = document.querySelector('.container');
const div = document.createElement('div');
for (let i = 0; i < elementos.length; i++) {//cria indices para cada objeto
    let { tag ,texto } = elementos[i];// tag e texto vai extrair os valores do array elementos
    let TagsCriadas = document.createElement(tag); //criado as tags p , div, footer e section
    let TextoCriado = document.createTextNode(texto);//voce pode substituir innerHTML por --> innerText 
    TagsCriadas.appendChild(TextoCriado);
    div.appendChild(TagsCriadas); //estamos colocando as tags criadas dentro de uma div
}
container.appendChild(div);// estamos jogando a div criada dentro da nossa class container

*/



