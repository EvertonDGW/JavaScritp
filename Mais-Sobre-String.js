let minhastring = "um texto"; // a barra invertida ( \ ) vai ocultar a letra que vier em seguida, meio que ele cria um espaço vazio no lugar da letra. coloque mais uma barra e veja o que acontece
console.log(minhastring);
console.log(minhastring[0]); //vai mostrar a letra que estiver no indice 0. se voce escolher um indice que nao existe vai dar undefined
console.log(minhastring.indexOf('texto')); // vai exibir o indice em que a palavra texto começa
console.log(minhastring.lastIndexOf('t')); // vai encontrar a ultima ocorrencia da letra t e mostrar o seu indice
console.log(minhastring[6]);
console.log(minhastring.slice(-3,));

/* ============================================================================================================================================================================================= */

// Este código usa o método match() da string para encontrar todas as ocorrências de caracteres minúsculos de "a" a "z" na string.
// A expressão regular /[a-z]/g é usada dentro do método match().
// /[a-z]/ é uma expressão regular que representa qualquer caractere minúsculo de "a" a "z".
// O modificador "g" indica que a pesquisa deve ser global, ou seja, deve encontrar todas as ocorrências na string, não apenas a primeira.
// O método match() retorna um array contendo todas as correspondências encontradas na string.
// Em seguida, o console.log() imprime esse array no console.
// se voce quiser o metodo match procure por caractesres maiusculos escreva assim --> console.log(minhastring.match(/[A-Z]/g));

console.log(minhastring.match(/[a-z]/g));
console.log(minhastring.match(/[A-Z]/g)); // vai retorna null(vazio) porque na variavel minhastring nao tem nenhuma letra maiuscula

/* ================================================================================================================================================================================================= */

//o metodo replace vai substituir a palavra 'um' pela palavra 'outro'

console.log(minhastring.replace('um', 'outro'));

/* ================================================================================================================================================================================================= */

/* o comando console.log(meutexto.length); imprimirá 12, pois há 12 caracteres na string, incluindo letras, espaços e pontuação.ou seja, length mostra o tamanho da string 
começando uma contagem a parti do numero 1
 */
const meutexto = "Olá, mundo!,"; 
console.log(meutexto.length);

/* ================================================================================================================================================================================================= */

//vai mostrar os caracteres que estiver no indice 4 ate o indice 7,mas nao vai mostrar o caracteres do indice 7 e sim do indice 6
//o metodo slice ignora os espaços vazios na string

console.log(minhastring.slice(4,7)); // saida ---> ext
console.log(minhastring.slice(-6)); // saida --> texto . no caso a letra (o) é o -1 e a letra (u) é o -7

/* ================================================================================================================================================================================================= */

console.log(minhastring.split('t')); // o metodo split vai dividir a minha frase em um array a parti da letra (t), a letra (t) nao sera incluida

/* ================================================================================================================================================================================================= */

console.log(minhastring.toUpperCase()); // vai deixar tudo maiusculo
console.log(minhastring.toLowerCase());// vai deixar tudo minusculo