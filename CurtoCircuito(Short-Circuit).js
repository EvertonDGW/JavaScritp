/* Em JavaScript, o conceito de "curto-circuito" refere-se à avaliação de expressões lógicas usando os operadores lógicos && (AND) e || (OR). Quando você usa esses operadores em uma expressão lógica, o JavaScript pode "curto-circuitar" a avaliação da expressão, o que significa que ele para de avaliar a expressão assim que for possível determinar o resultado com base nos valores dos operandos.

Vamos ver como isso funciona com o operador && (AND) e || (OR):

Operador && (AND):
Quando você usa o operador &&, se o primeiro operando for avaliado como falso, o resultado da expressão será falso, e o segundo operando nem mesmo será avaliado. Isso ocorre porque, se o primeiro operando já é falso, não importa o valor do segundo operando, pois a expressão como um todo será falsa. Se o primeiro operando for verdadeiro, o JavaScript precisa avaliar o segundo operando para determinar o resultado final. */

// Neste exemplo, a segunda condição (y > 5) não é avaliada, pois o primeiro operando (x < 3) já é falso.
var x = 2;
var y = 6;
if (x < 3 && y > 5) {
    console.log("Ambas as condições são verdadeiras.");
} else {
    console.log("Pelo menos uma das condições é falsa.");
}

//=========================================================================================================================================================

/* Operador || (OR):
Com o operador ||, se o primeiro operando for avaliado como verdadeiro, o resultado da expressão será verdadeiro, e o segundo operando nem será avaliado. Isso ocorre porque, se o primeiro operando já é verdadeiro, não importa o valor do segundo operando, pois a expressão como um todo será verdadeira. Se o primeiro operando for falso, o JavaScript precisa avaliar o segundo operando para determinar o resultado final.

Exemplo: */

// Neste exemplo, a segunda condição (y > 5) não é avaliada, pois o primeiro operando (x > 1) já é verdadeiro.
var x = 2;
var y = 6;
if (x > 1 || y > 5) {
    console.log("Pelo menos uma das condições é verdadeira.");
} else {
    console.log("Ambas as condições são falsas.");
}