function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        realizaConta() {
            let conta = this.display.value
            conta = eval(conta)
            this.display.value = conta
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) { // as teclas possuem código para ter seus eventos obtidos. Cada tecla tem uma keyCode difernete
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.display.value = ''
                }

                if (el.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1)
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

//this esta se referindo ao objeto criado chamado de calculadora, ou seja, quando fala this estamos falando calculadora.(metodo)
//em certa parte do codigo this esta relacionado com document, ou seja, em alguns lugares quando usamos this esta chamando document.(alguma coisa)
//conclusão dependendo do que voce esta criando this por ser varias coisas como um objeto ou ate mesmo um document

//voce percebe então que quando this é usado ele aponta para o objeto que criamos e tambem para document, ou seja, temos um problema. queremos que quando
//this for usado ele aponte apenas para o nosso objeto criado (calculadora) para resolver isso usamos
// bind(this) quando usamos esse comando estamos dizendo para o javascript usar o nosso this (calculadora) inves de document
const calculadora = criaCalculadora()
calculadora.inicia()