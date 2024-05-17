function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        realizaConta() {
            let conta = this.display.value
            conta = eval(conta) //eval é um função que executa o código contido em uma string. evite usar pois traz riscos de segurança
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
            document.addEventListener('click', (e) => { //ARROW FUNCTION resolve o problema do THIS apontando para o document inves do Objeto calculadora
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText) //el.innertext são os botãos no HTML ou seja: 7 , 1,2 ,c ,+ ,=  etc.....
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

//quando usamos this estamos nos referindo ao objeto criado (calculadora), ou seja, quando usamos this estamos usando calculadora.(metodo)
//as vezes o this pode esta se referindo ao document.(metodo), ou seja, temos uma problema, porque  não queremos que o this esteja se referindo ao document
//e sim ao nosso OBJETO criado (calculadora)
//para resolver esse problema usamos: arrow function
//porque basicamente quando voce usa arrow function voce trava o this,ou seja, o this esta travado no objeto que criamos, logo todo vez que que for usado
//o this ele estara se referindo ao objeto criado (calculadora)

const calculadora = criaCalculadora()
calculadora.inicia()