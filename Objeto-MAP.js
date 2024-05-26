/*
 vamos criar um sistema para registrar estudantes,
 onde cada estudante tem um identificador único (ID) e um conjunto de informações associadas (nome, idade, e notas).

Passos:
Criar o Map para armazenar os estudantes.
Adicionar estudantes ao Map.
Recuperar informações de um estudante específico.
Atualizar informações de um estudante.
Remover um estudante do registro.
Iterar sobre todos os estudantes para imprimir suas informações.
Código com Comentários
javascript
Copiar código
 */

// Cria um novo Map para armazenar os registros dos estudantes

const estudantes = new Map();

// Função para adicionar um estudante
function adicionarEstudante(id, nome, idade, notas) {
  estudantes.set(id, { nome, idade, notas });
  console.log(`Estudante ${nome} adicionado com sucesso.`);
}

// Função para obter informações de um estudante
function obterEstudante(id) {
  if (estudantes.has(id)) {
    return estudantes.get(id);
  } else {
    console.log(`Estudante com ID ${id} não encontrado.`);
    return null;
  }
}

// Função para atualizar informações de um estudante
function atualizarEstudante(id, novosDados) {
  if (estudantes.has(id)) {
    estudantes.set(id, { ...estudantes.get(id), ...novosDados });
    console.log(`Informações do estudante com ID ${id} atualizadas com sucesso.`);
  } else {
    console.log(`Estudante com ID ${id} não encontrado.`);
  }
}

// Função para remover um estudante
function removerEstudante(id) {
  if (estudantes.delete(id)) {
    console.log(`Estudante com ID ${id} removido com sucesso.`);
  } else {
    console.log(`Estudante com ID ${id} não encontrado.`);
  }
}

// Função para imprimir todos os estudantes
function listarEstudantes() {
  estudantes.forEach((info, id) => {
    console.log(`ID: ${id}, Nome: ${info.nome}, Idade: ${info.idade}, Notas: ${info.notas.join(', ')}`);
  });
}

// Adicionando alguns estudantes
adicionarEstudante(1, 'Alice', 20, [85, 90, 88]);
adicionarEstudante(2, 'Bob', 22, [75, 80, 72]);
adicionarEstudante(3, 'Charlie', 21, [92, 95, 93]);

// Obtendo informações de um estudante
console.log(obterEstudante(2)); // { nome: 'Bob', idade: 22, notas: [ 75, 80, 72 ] }

// Atualizando informações de um estudante
atualizarEstudante(2, { idade: 23, notas: [80, 82, 78] });

// Removendo um estudante
removerEstudante(3);

// Listando todos os estudantes
listarEstudantes();
// ID: 1, Nome: Alice, Idade: 20, Notas: 85, 90, 88
// ID: 2, Nome: Bob, Idade: 23, Notas: 80, 82, 78