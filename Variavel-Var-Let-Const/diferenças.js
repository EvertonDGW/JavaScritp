// vamos analisar algumas diferenças entre as variaveis --> VAR , LET E CONST
const verdadeira = true;

//lembre-se, nao podemos redeclarar variaveis com LET
//note que no exemplo abaixo nao redeclaramos a variavel let nome, mas criamos 2 variaveis com o mesmo nome mas com valores diferentes
//isso acontece porque LET tem escopo por bloco --> {.....isso é um bloco}

let nome = 'everton';  //criamos uma aqui
var nome2 = 'everton';

if (verdadeira) {

    let nome = 'roberto';// e outra aqui
    console.log(nome, nome2);

}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//lembre-se com VAR podemos redeclarar variaveis
//quando tentamos usar o mesmo pensamento que usamos em let na ariavel VAR, a variavel é redeclarada,ou seja, a variavel nome3 foi redeclarada

let nome4 = 'marcos'
var nome3 = 'darius';

if (verdadeira) {

    var nome3 = 'garen'; //redeclarada
    let nome4 = 'pedro';

    if (verdadeira) {

        let nome4 = 'jil'
        var nome3 = 'wukong' //redeclarada

    }
}

console.log(nome4, nome3)
//vai exibir a ultima variavel VAR que foi redeclarada

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//VAR tem escopo por função

var oi = 'MA-MA-MIA'

function falaoi () {
    console.log(oi)
}
falaoi()