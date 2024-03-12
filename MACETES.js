const a = [
    1,2,3,4,
]
let b = a // b é igual a a,ou seja, ambas variaveis apontam para o mesmo valor na memoria
console.log(a,b)

b.push('everton')//sendo assim, quando eu adicionar a string em b, ele sera adcionada tambem em a
console.log(a,b)

let c = [...b] // estou jogando o valor de b dentro de c,usando o metodo por referencia,quando usamos esse metodo os valores nao apontam para o mesmo valor na memoria

console.log(c)

c.pop(); //exclui o ultimo elemento
c.push('darius'); //adiciona um elemento na ultima posição
console.log(a,b,c); //os elementos adicionados e excluidos em C nao afetam A e nem B, porque usamos o metodo por referencia [...b]
