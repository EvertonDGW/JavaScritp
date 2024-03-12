const n1 = Number(prompt('Digite um número'));
const numero = document.getElementById('numero');
const texto = document.getElementById('texto');

numero.innerHTML = n1; // voce pode usar textContent no lugar de innerHTML

texto.innerHTML += `<p>A raiz quadrada do seu número é: ${Math.sqrt(n1)}</p>`;
texto.innerHTML += `<p>Seu número é um inteiro?: ${Number.isInteger(n1)}</p>`;
texto.innerHTML += `<p>é NaN?:${Number.isNaN(n1)}</p>`;
texto.innerHTML += `<p>seu numero arredondado para baixo é:${Math.floor(n1)} </p>`;
texto.innerHTML += `<p>seu numero arredondado para cima é:${Math.ceil(n1)} </p>`;
texto.innerHTML += `<p>seu numero com 2 casas decimais: ${n1.toFixed(2)} </p>`;

//lembre-se de usar o operador ( += ) para adcionar mais conteudo

