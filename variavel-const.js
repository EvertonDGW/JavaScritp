const nome = 'joão';
console.log(nome);

/* ================================================================================================================================================================= */
/* nao podemos declarar variavel usando const, ou seja, vai dar erro. exemplo abaixo */

/* const nome2     *declaramos a variavel
nome2 = 'Everton'   atribuimos valor a variavel*
console.log(nome2) */
/* ================================================================================================================================================================= */

/* quando utilizamos const o valor referente a variavel nao pode ser alterado,ou seja, usamos const quando temos certeza que a nossa variavel nao vai ser alterada*/

/* ================================================================================================================================================================= */

/* exercicio usando let e const*/

const NomeDaPessoa = 'luiz otavio';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const AlturaEmM = 1.80;
let IndeceDeMassaCorporal= 84 / ( AlturaEmM *  AlturaEmM ); /* aqui estamos calculando o peso da pessoa */
let AnoDeNascimento = 2024 - idade; /* aqui calculamos o ano de nascimento da pessoa */
console.log(`${NomeDaPessoa} ${sobrenome} tem ${idade} anos pesa ${peso} kg `);
console.log(`tem ${AlturaEmM} de altura e seu imc é de ${IndeceDeMassaCorporal}`);
console.log(`${NomeDaPessoa} nasceu em ${AnoDeNascimento}`);

/* usamos ( `` ) sinal de crase e sinal de moeada ( $ ) para criar o exercicio, esse metodo se chama Template String */







