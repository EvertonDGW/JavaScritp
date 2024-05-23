// .map((valor, indice, array) => function)
// o map transforma os valores dos elementos. Sempre volta a mesma quantidade de valores, mas todos alterados

//o metodo MAP e funciona da mesma forma de o metodo FILTER mas, inves de filtrar valores, o metodo Map vai alterar valores
// Ex: retornar o dobro dos valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// o metodo map esta iterando sobre o array numeros, ou seja, dentro de valor esta cada elemento do array numeros e cada um desse elemento vão ser
//multiplicados por 2

const dobro = numeros.map(valor => valor * 2) //usamos o metodo MAP dobrar o valor de cada elemento
console.log(dobro)