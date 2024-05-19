//exemplo de uma função geradora
//vamos supor que voce que criar uma função que entregue valores diferente a cada chamada, ou seja,
//toda vez que a função for chamada ele vai entregar um valor diferente

//a função geradora é uma função que pode ser chamada variadas vezes e pode entregar
// valores diferentes para cada vez que for chamada, sendo interpretada pelo javascript
// como um "object generator"
// para cada retorno, usa-se a ´palavra reservada yield em vez do return



// usa-se * após o nome function:ou seja para indicar um função geradora voce deve usar o simbolo de --> * depois que escrever function
//na primeira vez que eu chamar a função ele vai me retorna o primeiro yield que é o 'Valor 1'
//quando eu usar o next ele vai me retorna o segundo yield que é o 'valor 2'

function* geradora1() {
    // Codigo qualquer
    yield 'Valor 1'
    // Codigo qualquer
    yield 'Valor 2'
    // Codigo qualquer
    yield 'Valor 3'
}
const g1 = geradora1()

// para executar o valor da sequência, é necessário chamar o método .next()
// para acessar o valor em si, é necessário usar a notação de ponto: value
console.log(g1.next(),'<-- done: false significa que ainda não encerraram os valores') 
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next(), '<-- value undefined, pois encerraram os valores e done é verdadeiro')

//======================================================================================================================================================================

function* geradora2() {
    // Codigo qualquer
    yield 'Valor 4'
    // Codigo qualquer
    yield 'Valor 5'
    // Codigo qualquer
    yield 'Valor 6'
}
const g2 = geradora2()

// É possível se usar o laço for também para estes casos:
for (let valor of g2) {
    console.log(valor)
}

//======================================================================================================================================================================

// gerador "infinito"
function* geradora3() {
    let i = 0

    while (true) {
        yield i
        i++
    }
}
const g3 = geradora3()
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)