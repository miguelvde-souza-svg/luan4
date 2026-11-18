// 1.1 Converter para arrow function
const saudacao = (nome) => "Olá, " + nome;
console.log(saudacao("Miguel")); // "Olá, Miguel"

// 1.2 Arrow function soma
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5

// 1.3 Arrow function comDesconto (uma linha, sem chaves e sem return)
const comDesconto = (preco) => preco * 0.9;
console.log(comDesconto(100)); // 90
// 2.1 Reescrever com ternário
let idade = 20;
let situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(situacao); // "Maior de idade"

idade = 15;
situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(situacao); // "Menor de idade"

// 2.2 Arrow function statusNota
const statusNota = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");
console.log(statusNota(8)); // "Aprovado"
console.log(statusNota(5)); // "Reprovado"

// 2.3 Arrow function textoBotao
const textoBotao = (logado) => (logado ? "Sair" : "Entrar");
console.log(textoBotao(true)); // "Sair"
console.log(textoBotao(false)); // "Entrar"
// ---------- 3. map ----------

// 3.1 Dobrar cada número
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6, 8]

// 3.2 Nomes em letra maiúscula
const nomes = ["ana", "bruno", "carla"];
const maiusculos = nomes.map((nome) => nome.toUpperCase());
console.log(maiusculos); // ["ANA", "BRUNO", "CARLA"]

// 3.3 Lista só com os nomes dos produtos
const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];
const nomesProdutos = produtos.map((produto) => produto.nome);
console.log(nomesProdutos); // ["Caderno", "Caneta", "Mochila"]
// ---------- 4. filter ----------

// 4.1 Só os números pares
const numerosLista = [1, 2, 3, 4, 5, 6];
const pares = numerosLista.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4, 6]

// 4.2 Só as notas aprovadas (7 ou mais)
const notas = [5, 8, 6.5, 9, 7];
const aprovadas = notas.filter((nota) => nota >= 7);
console.log(aprovadas); // [8, 9, 7]

// 4.3 Produtos com preço menor que 50 e depois só os nomes
// (usa o array "produtos" do exercício 3.3)
const nomesBaratos = produtos
  .filter((produto) => produto.preco < 50)
  .map((produto) => produto.nome);
console.log(nomesBaratos); // ["Caderno", "Caneta"]