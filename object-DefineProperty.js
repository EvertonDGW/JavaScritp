//vamos aprender sobre object-DefineProperty e object-DefinePropertys
//ou seja o primeiro afeta apenas uma propriedade
//o segundo afeta varias propriedades de um objeto

//essa é um função construtora, ou seja, ela cria um objeto
//new cria um objeto vazio e usa os atributos da função produto() para o objeto criado
//o objeto criaod fica dentro de p1
//ou seja, quando usamos THIS estamos nos referindo ao objeto criado
//ou sea this.nome é a mesma coisa que p1.nome
//agora vamos usar o object.DefineProperty para

function produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'estoque',{ 
        enumerable: true,
        value : estoque,
        writable: true, //se writable se estiver como true ele permite que o valor de estoque seja alterado mas, se estiver como false ele não vai permite
     })
    
}

const p1 = new produto('camisa', 12, 30)
console.log(p1)
p1.estoque = 5000 //ou seja writable vai permite que o valor de estoque seja alterado de 30 para 5000
console.log(p1)

//CONCLUSÃO: quando usamos object.defineproperty estamos alterando os atributos de um objeto
//ou seja, podemos aterar da maneira como quiser o exmeplo acima foi a prova disso
//usamos o comando justamente para alterar uma unica propriedade que foi o estoque