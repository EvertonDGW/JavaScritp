//função recursiva é basicamente uma função que se chama de volta
// Faz algo similar ao que as estruturas de repetição fazem
// O node vai encerrar a execução se houverem muitas recursividades


function recursiva(max) {
    if (max == 10) return //se o max for igual a 10 a função encerra
    max++
    console.log(max)
    recursiva(max) //chamando a função novamente
}


recursiva(0)