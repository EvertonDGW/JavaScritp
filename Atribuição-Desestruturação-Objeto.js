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

const { nome : n, sobrenome, idade } = pessoa; // quando usamos nome : n. estamos fazendo com que os valores da variavel nome sejam passados para dentro da variavel n
console.log(n,sobrenome)