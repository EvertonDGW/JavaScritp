// utilizada geralmente para reduzir o array a um único elemento
// reduce.((acumulador, valor, indce, array) => {function}, valorInicialAcumulador)

// somar todos números (reduce)
// retornar um array com os pares (filter)
// retornar um array com os valores dobrados (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// dentro do parametro acumulador vai ficar a somar dos elementos
// dentro do parametro valor vai ficar a iteração de cada elemento feita no array numeros

// o zero no final do metodo reduce server para iniciar o nosso acumulador em 0
// o que acontece é o seguinte : 0 + 5 = 5
// esse valor 5 e jogado para o parametro acumulador
// em seguida o valor 5 é somado com a proxima iteração do parametro valor
const soma = numeros.reduce((acumulador, valor) => acumulador += valor, 0)
console.log('A soma é: ', soma)

//==================================================================================================================================

// 2
const pares = numeros.filter(valor => valor % 2 === 0)
console.log(pares)



//==================================================================================================================================

// 3
const dobro = numeros.map(valor => valor * 2)
console.log('dobro: ', dobro)
