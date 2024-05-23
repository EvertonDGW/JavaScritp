// uma forma alternativa de iterar sobre arrays (somente)
// .forEach((valor, indice, array) => function )
// muito similar ao próprio for, unindo conceitos do for in e do for of
// o metodo For Each esta iterando sobre o array numeros, ou seja,

//dentro do paratemetro valor fica os valores 
//dentro do parametro indice vai ficar os indices de cada elemento do array
//e dentro do array vai ficar o array 

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numeros.forEach((valor, indice, array) => console.log(`${indice}:`, valor,))