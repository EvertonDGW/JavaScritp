//vamos aprender a usar os Getters e Setters
//Getters e Setters é como se fossem uma função
// o get vai pegar um valor apenas isso
function produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'estoque',{ 
        enumerable: true,
        configurable: true,

        //criando Getter e retornando o valor de estoque para o Getter
        get: function () {
            return estoque;
        }
     })
    
}

const p1 = new produto('camisa', 12, 30)
