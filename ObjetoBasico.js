//para criar um objeto iniciamos com chaves {}
//para iniciar um array iniciamos com colchetes []

const pessoa01 = {  //criamos um objeto chamado pessoa01
    nome:'everton',
    sobrenome: 'roberto',
    idade: 20,    
}

//para acessar os dados referentes ao objeto criado,use os comandos a seguir:

console.log(pessoa01.nome); //vai exibir o nome
console.log(pessoa01.sobrenome); //vai exibir o sobrenome
console.log(pessoa01.idade); //vai exibir a idade
console.log(pessoa01); //vai exibir tudo que estiver dentro do objeto

const pessoa02 = {  //criamos um objeto chamado pessoa01
    nome:'marcos',
    sobrenome: 'silva',
    idade: 30,    
}

console.log(pessoa02.nome); 
console.log(pessoa02.sobrenome); 
console.log(pessoa02.idade); 
console.log(pessoa02); 

//========================================================================================================================================================================

//observe que se voce tivesse que criar 1000 objetos sobre informações de determinadas pessoas isso seria cansativo. podemos criar uma função para gerar isso automaticamente
//exemplo abaixo
//observe que criamos uma função e dentro dessa função criamos um objeto

function CriarPessoa(nome,sobrenome,idade) {
    return {  // usamos chaves {} porque estamos criando um objeto
        nome:nome,
        sobrenome:sobrenome,  
        idade:idade,  //dica voce nao precisa usar idade:idade,voce pode colocar simplesmente idade.isso vale para os elementos a cima
    }
}

const pessoa1 = CriarPessoa('Darius','Noxus',10);
const pessoa2 = CriarPessoa('Garen','Demacia',20);
const pessoa3 = CriarPessoa('Wukong','Ionia',30);
const pessoa4 = CriarPessoa('Quinn','Atirado',40);
const pessoa5 = CriarPessoa('Fizz','Peixonauta',50);
console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);

//========================================================================================================================================================================
//a seguir vamos criar um objeto e dentro desse objeto vamos criar uma função
//quando fazermos isso, a função passa a ser um metodo desse objeto,ou seja, a função pode ser chamada de metodo

const pessoa08 = { // o nome do nosso objeto é pessoa08
    nome:'chico',
    sobrenome:'xavier',
    idade:60,

    //logo abaixo esta a nossa função
    //note que não foi preciso usar o comando function para criar a função
    //fala() --> aqui temos o nome da função e o parametro dela

    fala() {  
        console.log(`${this.nome} ${this.sobrenome} esta falando oi....`);  //this significa esse, ele esta sendo usado para se referir ao objeto,ou seja, o significado seria 'esse objeto(pessoa08)'
    }                                                                     //this.nome estamos querendo exibir o valor do nome referente ao objeto(pessoa08)
};

pessoa08.fala(); //para chamar a função é necessario primeiro chamar o objeto e em seguida chamar a função
//========================================================================================================================================================================

//criando outro exemplo

const pessoa09 = { // o nome do nosso objeto é pessoa09
    nome:'picudo',
    sobrenome:'poderoso',
    idade:60,

    //logo abaixo esta a nossa função
    //note que não foi preciso usar o comando function para criar a função
    //fala() --> aqui temos o nome da função e o parametro dela

    fala() {  
        console.log(`a minha idade atual é: ${this.idade}`);  
    }, 
    
    AumentaIdade() {
        this.idade++
    }
};

pessoa09.fala(); //para chamar a função é necessario primeiro chamar o objeto e em seguida chamar a função
pessoa09.AumentaIdade();
pessoa09.fala();
