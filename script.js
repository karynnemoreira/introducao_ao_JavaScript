//Variáveis - Funcionam como uma caixinha/espaços na memória do computador, onde podemos guardar informações.

//Tipos de variáveis:

//let = é uma variável que pode mudar durante o código.

//const = é uma variável constante, não pode mudar. O  VALOR NUNCA VAI MUDAR.

//var = Era o jeito antigo de criar variáveis. Mas, hoje é evitador por causa de comportamentos técnicos que podem gerar erros.

//-------------LET------------

let nome = "Maria";
console.log(nome);

//let = palavra reservada, variável.
//nome = identificador , como se fosse a etiqueta da caixa.
// = recebe
// "Maria" valor (O que vai ser armazenado na memória)

//----Reatribuindo valores-----

nome = "Maria das Dores";
//console.log(nome)

// ------------CONST---------

const cpf = 12345678910;
const endereco = "Rua do tacaca";

console.log(cpf);
console.log(endereco);

cpf = 12345678901;
endereco = "Rua do abacate";

//Erro!! Constantes não podem ser reatribuídas

//-----Nomes Claros---------

// camelCase = nomeDoUsuario (Muito utilizado em JavaScript)
// snake_case = nome_do_usuario (Muito utilizado em python)
// PascalCase = NomeDoUsuario (Muito usado em C#, Java, TypeScript. Em JavaScript, é usado para nomes de componentes e classes.)

let nomeDoUsuario = "Abdullah";
let nome_do_usuario = "Bianca";
let NomeDoUsuario = "Thiago Henrique";

console.log(nome);
console.log(nomeDoUsuario);
console.log(nome_do_usuario);
console.log(NomeDoUsuario);

//-------Atividade em aula -----

//idade
//linguagem de programação
//cidade

let idade = 30;
let linguagemDeProgramacao = "python";
const cidadeNatal = "Recife";

console.log(idade);
console.log(linguagemDeProgramacao);
console.log(cidadeNatal);

//---- Outra forma de mostrar as variáveis utilizando o mesmo console.log-----
console.log(idade, linguagemDeProgramacao, cidadeNatal);

idade = 25; //Reatribuindo o valor da variável - Antes era 30, agora passou a ser 25.
console.log(idade);

//---TIPOS DE DADOS , defibem o tipo de valor que uma variável pode armazenar.

//String (texto) - Dados para armazenar textos. No Js, sempre está entre aspas " ", ' ' , ` `.

let nomeVisitante = "Tony Stark";

//Number - Dados para armazenar números. Não utilizo aspas.

let livros = 3; //Número
let livrosPegos = "3"; // Aqui representa o 3 como texto

//Boolean - valor verdadeiro ou falso / true ou false
let visitanteAtivo = true;
let alunosEntendendo = false;

//Null - valor nulo, reservado, porém, vazio. A caixinha está reservada para receber um valor, no qual ainda não sei.
let livroFavorito = null;

//Undefined quando uma variável foi criada, mas ainda não recebeu nenhum valor.

let telefoneVisitante;
console.log(telefoneVisitante);
