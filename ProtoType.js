

/* Em JavaScript, os protótipos são uma parte fundamental da herança e do sistema de objetos. Eles são usados para compartilhar propriedades e métodos entre diferentes objetos, permitindo a criação de hierarquias de objetos e a reutilização de código.

Aqui estão alguns dos principais usos e benefícios dos protótipos em JavaScript:

Herança: Protótipos são usados para implementar herança em JavaScript. Quando você cria um objeto a partir de uma função construtora ou de um literal de objeto, esse objeto herda propriedades e métodos do protótipo associado a essa função construtora ou a Object.prototype no caso de objetos literais. Isso permite compartilhar comportamentos e características entre objetos, reduzindo a redundância e facilitando a manutenção do código.

Compartilhamento de métodos e propriedades: Ao adicionar métodos e propriedades a um protótipo, esses métodos e propriedades estão disponíveis para todas as instâncias desse tipo de objeto. Isso promove a reutilização de código e reduz a quantidade de memória utilizada, já que os métodos e propriedades não precisam ser recriados para cada instância do objeto.

Modificação dinâmica de objetos: Os protótipos permitem que você modifique dinamicamente os métodos e propriedades de um objeto em tempo de execução, afetando todas as instâncias desse objeto. Isso pode ser útil para estender ou modificar o comportamento padrão de objetos em tempo de execução.

Encadeamento de protótipos: JavaScript suporta encadeamento de protótipos, o que significa que um objeto pode herdar propriedades e métodos não apenas do seu protótipo direto, mas também do protótipo do protótipo e assim por diante. Isso permite a criação de hierarquias complexas de objetos e promove uma abordagem mais flexível e orientada a objetos.

Em resumo, os protótipos em JavaScript são essenciais para implementar herança, compartilhar métodos e propriedades entre objetos e promover a reutilização de código, resultando em um código mais limpo, eficiente e fácil de manter.

No JavaScript, cada objeto possui uma referência interna para outro objeto chamado de seu "protótipo". Quando você tenta acessar uma propriedade ou método de um objeto que não está diretamente definido nesse objeto, o JavaScript procura essa propriedade ou método em seu protótipo e, se não encontrar, procura no protótipo do protótipo, e assim por diante, até encontrar ou atingir o final da cadeia de protótipos.


prototype e como se fosse uma pasta que armazena os metododos de determinado objeto e toda vez que determinada metodo ou atributo for chamado ele chama diretamente do prototype. é criado uma pasta chamada ---> (___proto___)
esse pasta esta dentro do console.
os prototypes estão relacionados apenas aos objetos e as funções contrutoras
ou seja toda função construtora tem o comando -->>> object.prototype


 */
