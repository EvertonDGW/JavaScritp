
//vamos reutilizar um codigo usando factory function e prototypes

// Define um objeto 'falar' com um método 'falar'
const falar = {
    falar() {
        // Usa 'this.nome' para referenciar o nome do objeto que chama este método
        console.log(`${this.nome} está falando.`);
    },
};

// Define um objeto 'comer' com um método 'comer'
const comer = {
    comer() {
        // Usa 'this.nome' para referenciar o nome do objeto que chama este método
        console.log(`${this.nome} está comendo.`);
    },
};

// Define um objeto 'beber' com um método 'beber'
const beber = {
    beber() {
        // Usa 'this.nome' para referenciar o nome do objeto que chama este método
        console.log(`${this.nome} está bebendo.`);
    },
};

// Cria um novo objeto 'pessoaPrototype' combinando os métodos de 'falar', 'comer' e 'beber'
const pessoaPrototype = Object.assign({}, falar, comer, beber);

// Função para criar novos objetos 'pessoa'
function criaPessoa(nome, sobrenome) {
    // Usa 'Object.create' para criar um novo objeto que herda de 'pessoaPrototype'
    // Define as propriedades 'nome' e 'sobrenome' no novo objeto
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

// Cria uma nova pessoa 'p1' com nome 'Luiz' e sobrenome 'Otávio'
const p1 = criaPessoa('Luiz', 'Otávio');
// Cria uma nova pessoa 'p2' com nome 'Maria' e sobrenome 'A.'
const p2 = criaPessoa('Maria', 'A.');

// Imprime o objeto 'p2' no console
console.log(p2);

// Exemplos de uso dos métodos herdados do protótipo
p1.falar(); // Luiz está falando.
p2.comer(); // Maria está comendo.
p2.beber(); // Maria está bebendo.

//O código demonstra uma forma eficiente de reutilizar métodos através de um protótipo compartilhado (pessoaPrototype),
// permitindo que os objetos criados (p1 e p2) compartilhem esses métodos sem duplicação, e ainda mantendo suas propriedades individuais (nome e sobrenome).