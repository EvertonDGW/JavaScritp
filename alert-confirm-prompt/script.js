window.alert('responda o que vem a seguir')
const confirmar = window.confirm('voce tem certeza que é brasileiro?') // se o usuarios responder ok, retorna um valor true, se ele responder cancelar retorna uma valor false
console.log(confirmar)
window.prompt('qual sua idade?')

/* use esses comando no ambiente do google --> inspecionar elemento depois click em console e use esses comandos la */

/* ===================================================================================================================================================== */

//exercicio:

let n1 = window.Number(prompt('digite um numero'));
let n2 = window.Number(prompt('digite outro numero'));
const resultado = n1 + n2;
window.alert(`o resultado foi ${resultado}`);
console.log(resultado)


//tem outra forma de converte  a string do prompt usando variaveis, exemplo usando o exercicio acima:

// let n1 = window.prompt('digite um numero');
// let n2 = window.prompt('digite outro numero');
// n1 = Number(n1)
// n2 = Number(n2)
// let resultado = n1 + n2;
// window.alert(`o resultado foi ${resultado}`);
// console.log(resultado)

