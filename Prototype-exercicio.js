function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
//os metodos aumento e desconto ele são metodos criados no prototype do objeto produto

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

//o método setPrototypeOf() esta sendo usado para definir o protótipo do objeto p2 como o protótipo do objeto Produto.
//Isso significa que p2 herda as propriedades e métodos definidos no protótipo do objeto Produto.
//Isso é comumente usado para estabelecer herança prototípica em JavaScript, onde objetos podem herdar propriedades e métodos de outros objetos.
//ou seja, o objeto p2 herda as propriedades do objeto produto

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10); //esse valor 10 e jogado no parametro porcentual do metodo aumento

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aumento(10); ////esse valor 10 e jogado no parametro porcentual do metodo aumento
console.log(p3);
console.log(p2);
console.log(p1);

//note que todos os objetos usam a mesma função contrutora

//conclusão: nesse exercicio usamos herança de prototype,
//ou seja,criamos e usamos os metodos e atributos de objetos e passamos esses metodos e atributos para criar e atribuir novos objetos