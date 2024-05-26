//Polimorfismo:

//É a capacidade de um método se comportar de maneiras diferentes com base no objeto que o está chamando.
//Em outras palavras, um mesmo método pode ter implementações diferentes em classes diferentes.

// Classe base
function Forma() {}

// Método que será sobrescrito nas subclasses
Forma.prototype.calcularArea = function () {
    throw new Error("Este método deve ser implementado pelas subclasses");
};

// Subclasse Circulo
function Circulo(raio) {
    this.raio = raio;
}
Circulo.prototype = Object.create(Forma.prototype);
Circulo.prototype.constructor = Circulo;

// Implementação do método calcularArea para Circulo
Circulo.prototype.calcularArea = function () {
    return Math.PI * this.raio * this.raio;
};

// Subclasse Retangulo
function Retangulo(largura, altura) {
    this.largura = largura;
    this.altura = altura;
}
Retangulo.prototype = Object.create(Forma.prototype);
Retangulo.prototype.constructor = Retangulo;

// Implementação do método calcularArea para Retangulo
Retangulo.prototype.calcularArea = function () {
    return this.largura * this.altura;
};

// Função para mostrar polimorfismo
function exibirArea(forma) {
    console.log("A área é: " + forma.calcularArea());
}

// Criação dos objetos
var circulo = new Circulo(5);
var retangulo = new Retangulo(4, 6);

// Uso do polimorfismo
exibirArea(circulo); // A área é: 78.53981633974483
exibirArea(retangulo); // A área é: 24