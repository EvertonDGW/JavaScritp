//babel serve para converte codigo da atualidade para navegadores antigos, ou seja, ele converte o cogido atual para um codigo antigo para funcionar em navegadores antigos

//ex

const nome = 'liz';
const objt = { nome };
const nobobjt = { ...objt };
console.log(nobobjt)

//para converte esse bloco de codigo uso esse comando no TERMINAL:

//npx babel main.js -o bundle.js --presets=@babel/preset-env
//quando voce executar esse codigo no terminal vai abrir um arquivo chamado bundle.js, dentro dele esta o mesmo codigo mas, aora esta convertido
//esses arquivos pack.json eles foram criados usando o comando --> npm init -y

//apasta node_modules é uma pasta que o babel precisa usar para funcionar corretamente. ela foi criado usando o comando
//npm install --save-dev @babel/cli @babel/preset-env @babel/core