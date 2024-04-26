//vamos aprender como funciona a estrutura de repetição --> While e Do While

let i = 0

while (i <= 10) {
    console.log(i)
    i++
    
}

//==========================================================================================

console.log('========================')

function GerarNumero (min,max) {
    const n = Math.random() * ( max - min ) + min ; //math.random vai gerar um numero entre 0 e 1, mas nunca vai chegar em 1, ou seja, o numero gerado é fechado em 0 e aberto em 1 [0,1). max e min é utilizado
    //para estabelezer um limite para o numero gerado, ou seja, o numero gerado vai ser entre 1 e 50
    return Math.floor(n); //estamos tirando as casas decimais do numero gerado
}

const min = 1;
const max = 50;
//vamos colocar a condição como falsa, ou seja, o numero gerado vai ser igual a 10
//ja que a variavel c é igual a 10 a condição dentro de while sera falsa e o codigo nao sera executado
//entretando o Do while sera executado pelo menos uma unica vez indepedentemente da condição ser verdadeira ou falsa
let c = 10 // trocamos por GerarNumero(min , max);


while ( c !== 10 ) { //enquanto o numero gerado for diferente de 10 a estrutura de repetição vai continuar executando o codigo até que o numero gerado seja igual a 10
    c = GerarNumero(min, max);
    console.log(c)
}

//==========================================================================================
console.log('################')

do {
    c = GerarNumero(min, max);
    console.log(c)

} while ( c !== 10 )

//quando usamos Do while a condição é verificada após a execução do bloco de código, ou seja, primeiro é executado o bloco de codigo e depois e verificado a condição. Isso significa que o bloco de código será executado pelo menos uma vez, independentemente da condição ser verdadeira ou falsa.

//no while o bloco de codigo so sera executado se a condição for verdadeira