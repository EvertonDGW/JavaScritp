// operadores logicos
// &&  -> AND -> e --> a saida só sera verdadeira se ambas entradas forem verdadeira
// || -> OR -> OU --> a saida sera verdadeira se pelo menos 1 das dentradas forem verdadeira
// ! -> NOT -> Não --> significa inversão, ou seja, se tiver TRUE o sinal de ! pode ser usado para converte para FALSE

//=================================================================================================================================================

/* principais valores que são avaliados como "falsy"(false) em JavaScript:

* false: O valor booleano false.
* 0: O número zero.
* '' ou "": String vazia.
* null: Representa a ausência de valor.
* undefined: Indica que uma variável não foi inicializada.
* NaN: Representa um valor "não é um número".
* Todos esses valores são avaliados como falso em expressões booleanas. Por exemplo:

 */

if (false) {
    console.log("Esta mensagem não será exibida.");
}

if (0) {
    console.log("Esta mensagem não será exibida.");
}

if ('') {
    console.log("Esta mensagem não será exibida.");
}

if (null) {
    console.log("Esta mensagem não será exibida.");
}

if (undefined) {
    console.log("Esta mensagem não será exibida.");
}

if (NaN) {
    console.log("Esta mensagem não será exibida.");
}

// Nenhuma dessas mensagens será exibida porque todas as condições são avaliadas como falsas.

//=================================================================================================================================================

/* valores que são avaliados como "truthy"(verdadeiro) em JavaScript:

* true: O valor booleano true.
* 1 (ou qualquer número diferente de zero): Qualquer número diferente de zero é considerado verdadeiro.
* 'texto': Strings não vazias são consideradas verdadeiras.
* []: Arrays vazios são considerados verdadeiros.
* {}: Objetos vazios são considerados verdadeiros.
* function() {}: Funções são consideradas verdadeiras.
* Basicamente, qualquer valor que não esteja na lista de "falsy" é considerado "truthy". Por exemplo:

 */

if (true) {
    console.log("Esta mensagem será exibida.");
}

if (1) {
    console.log("Esta mensagem será exibida.");
}

if ('texto') {
    console.log("Esta mensagem será exibida.");
}

if ([]) {
    console.log("Esta mensagem será exibida.");
}

if ({}) {
    console.log("Esta mensagem será exibida.");
}

if (function() {}) {
    console.log("Esta mensagem será exibida.");
}

// Todas essas mensagens serão exibidas porque todas as condições são avaliadas como verdadeiras.
