// if --> sinifica --> se
// else if --> significa --> se não
// else --> é usado quando (if) ou (else if) é FALSE,ou seja, else executa determinada ação quando if ou else if é false

// vamos criar um exemplo usando HORAS

// entre 0 e 11 --> bom dia
// entre 12 e 17 --> boa tarde
// entre 18 e 23 --> boa noite

const hora =1 // digite aqui a hora de 0 ate 23
if (hora >= 0 && hora <= 11) { //&&(END) significa -> e
    console.log('bom dia')
}
else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde')
}
else if (hora >= 18 && hora <= 23) {
    console.log('boa noite')
}
else {
    console.log('voce é idiota? a ora que voce digitou não existe. Estude mais!') // se voce digitar uma hora que não existe essa mensagem é exibida exemplo: 90
}