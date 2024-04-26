const paragrafos = document.querySelector('.paragrafos');// estamos selecionando a class paragrafos
const ps = paragrafos.querySelectorAll('p');// vai selecionar todos os paragrafos que estão dentro da div. para cada paragrafo e adicionado um indice, ou seja, temos 4 paragrafos então temos os indices 0 , 1 , 2 e 3

const EstiloBody = getComputedStyle(document.body);//o getcomputedstyle permite acessar os style que foram implemetados para reutiliza-los, ou seja, vamos reutilizar o style do body
const BackGroundColorBody = EstiloBody.backgroundColor;
console.log(BackGroundColorBody); //vai exibir o RGD da cor de fundo do body


for (let p of ps) { //p é iteravel de ps, ou seja, p vai assumir temporariamente o valor de cada paragrafo. for of vai exibir os valores de cada paragrafo
    //console.log(p)
    p.style.backgroundColor = BackGroundColorBody//colocando o style do body nos paragrafos
    p.style.color = 'red' //alterando a cor do texto de cada paragrafo
};

//conclusão aprendemos a reutilizar a cor de fundo do body para aplicar nos paragrafos e aprendemos a mudar a cor do texto de cada paragrafo aprendemos tambem a selecionar uma div e em seguida a selecionar todos os paragrafos existentes nela