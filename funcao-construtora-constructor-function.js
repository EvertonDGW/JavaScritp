// a função construtora e semelhante a função fabrica ambas criam um objeto
// a diferença esta no modo como a função é escrita
// na função construtora sempre se Inicia o nome com letra maiúscula, usando-se antes a palavra "new"

// Criando função construtora
// note que a primeira letra do nome da nossa função(Pessoa) começa com P maiusculo, logo temos uma função construtora
// entenda que nem toda vez quando uma função começar com a letra maiuscula significa que ele é uma função construtora, mas voce pode 
//deduzir / supor que talvez seja uma função construtora

//quando voce identificar a função construtora voce pode usar o this para servi de referencia a ela, ou seja, toda vez que eu usar this é o mesmo que Pessoa.(metodo)

function Pessoa(nome, sobrenome) {  
    this.nome = nome //atributos
    this.sobrenome = sobrenome //atributos
    
    this.metodo = function () { //metodo de this(Pessoa)
        console.log(`${this.nome} está falando sobre o método`)
    }
}

// new cria um objeto vazio e faz com que this aponte para esse objeto vazio e retorna automaticamente o resultado para as variaveis pessoa1 e pessoa2
// NEW é usado basicamente para avisar ao javascript que a função Pessoa() é uma função do tipo construtora, ou seja, uma função que cria um objeto
const pessoa1 = new Pessoa('Luiz', 'Otávio') 
const pessoa2 = new Pessoa('Maria', 'Joaquina')

console.log(pessoa1.nome, pessoa2.nome)
pessoa1.metodo()