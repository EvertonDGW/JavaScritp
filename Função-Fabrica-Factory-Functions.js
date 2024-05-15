//vamos estudar sobre factory function --> função fabrica

// Tratam-se de funções que retornam (criam) objetos

// Exemplo 1: Pessoa
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}.`;
        }
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio');
console.log(pessoa1.fala('Javascript'), '<-- foi necessário chamar a função com: ()');
console.log(criaPessoa('João', 'Victor').fala('mercado de trabalho'));

// Exemplo 2: Caneta
// get: faz com que o retorno de uma função seja adquirida diretamente, sem precisar invocar com ()
// "Finge" que a função é um atributo

function criaCaneta(comprimento, diametro, ponta) {
    return {
        comprimento,
        diametro,
        ponta,
        tipoDeCaneta() {
            if (ponta <= 0.5) return `Caneta para desenho`;
            if (ponta > 0.5 && ponta <= 0.7) return `Caneta para redação`;
            if (ponta > 0.7) return `Caneta para rascunho`;
        },
        get canetaCompleta() {
            return `A caneta possui ${this.comprimento}cm, com diâmetro do tubo de ${this.diametro}cm e diâmetro de ponta de ${this.ponta}mm`;
        }
    };
}

const caneta1 = criaCaneta(15, 0.7, 0.7);
console.log(caneta1.tipoDeCaneta());
console.log(caneta1.canetaCompleta); // Note que não é necessário chamar como função.  // se botar canetaCompleta(), apresentará erro, pois foi convencionado a não ser tratado como uma função


// Exemplo 3: Pessoa com getter e setter
// set: permite que os valores passados como parâmetro interajam com o get
function criaPessoaComNomeCompleto(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(vetorNome) {
            this.nome = vetorNome[0];
            this.sobrenome = vetorNome[1];
        }
    };
}

const pessoa2 = criaPessoaComNomeCompleto('Marcos', 'Vinícios');
console.log(pessoa2.nomeCompleto); // Chamando o getter

pessoa2.nomeCompleto = (['Felipe', 'Josias']); // Modificando os termos do nome através do set
console.log(pessoa2.nomeCompleto, '<->', pessoa2.nome, pessoa2.sobrenome); // Chamando o get, agora já modificado