//vamos aprender a usar os Getters e Setters
//Getters e Setters é como se fossem uma função
// o get vai pegar um valor apenas isso

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let valorprivado = estoque;

    Object.defineProperty(this, 'estoque', { 
        enumerable: true,
        configurable: true,

        // Getter esta pegando o valor de estoque
        //O getter retorna o valor atual de estoque.

        get: function () {
            return valorprivado;
        },

        // Setter esta manipulando o valor de estoque
        //O setter atualiza o valor de estoque apenas se o novo valor passar na validação. Caso contrário, ele imprime uma mensagem de erro e o valor de estoque permanece o mesmo.

        set: function (valor) {
            if (typeof valor !== 'number' || valor < 0) {
                console.log('Valor inválido');
                return;
            }
            valorprivado = valor;
        }
    });
}

const p1 = new Produto('camisa', 12, 30);
console.log(p1);

//quando usamos p1.estoque = ALGUM VALOR . esse valor e passado como parametro para o setter

p1.estoque = 'valor que eu quero';  // Tentativa de definir um valor inválido
console.log(p1.estoque);  // Valor não deve mudar devido à validação no setter
p1.estoque = 50;  // Definindo um valor válido
console.log(p1.estoque);  // Valor deve ser atualizado para 50







