const pessoa = { //criamos um objeto

    nome : 'Everton',
    sobrenome : 'Roberto',
    idade : 20,
    endereco : { //criamos outro objeto. ou seja criamos um objeto dentro de outro objeto

        rua: 'Av Brasil',
        numero: 2000
        
    }
};

//vamos usar a desestruturação via atribuição para OBJETOS

// quando usamos nome : n. estamos fazendo com que os valores da variavel nome sejam passados para dentro da variavel n
// quando usamos endereco:{rua,numero}. estamos pengado valores especificos dentro de endereco, ou seja estamos pegando o valor da rua e numero
const { nome : n, sobrenome, idade, endereco:{rua,numero}, endereco} = pessoa; 
console.log(n,sobrenome,idade,rua,numero,endereco);