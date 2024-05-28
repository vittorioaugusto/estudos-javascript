// Chamada direta (Invocação direta)
function falar1() {
    console.log("Olá, mundo!")
}
falar1()


// Função dentro de um objeto (Método de objeto)
const Pessoa = {
    nome: "Alice",
    saudacao: function () {
        console.log(`Olá, ${this.nome}`)
    }
};
Pessoa.saudacao()


// Função como construtor (com new)
function Pessoa(nome) {
    this.nome = nome;
    this.greet = function () {
        console.log(`Olá, ${this.nome}`)
    };
}
const pessoa1 = new Pessoa("Alice")
pessoa1.greet()


// Função com call ou apply
function falar2(saudacoes) {
    console.log(`${saudacoes} + ${this.nome}`)
}
const pessoa = { nome: "Alice" }
falar2.call(pessoa, "Hello")
falar2.apply(pessoa, ["Hi"])


// Função com bind
function falar3() {
    console.log(`Olá, ${this.nome}`)
}
const pessoa2 = { nome: "Alice" }
const chamar = falar3.bind(pessoa2)
chamar()


    // Função como uma IIFE (Immediately Invoked Function Expression)
    (function () {
        console.log("Hello, World!")
    })()


// Função como retorno de outra função
function outraFuncao() {
    return function () {
        console.log("Olá, função interna!")
    }
}
const internaFuncao = outraFuncao()
internaFuncao()


// Arrow functions
const falar4 = () => {
    console.log('Olá, mundo')
}
falar4()


// Função anônima atribuída a uma variável
const falar5 = function () {
    console.log('Olá, mundo');
};
falar5();


// Função passada como argumento
function chamdaFuncao(fn) {
    fn();
}
function falar6() {
    console.log('Olá, mundo');
}
chamdaFuncao(falar6); 