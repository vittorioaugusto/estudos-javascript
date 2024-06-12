const alunos = [
    { nome: 'João', nota: 7.7, bolsista: false },
    { nome: 'Caio', nota: 9.3, bolsista: true },
    { nome: 'Pedro', nota: 9.7, bolsista: false },
    { nome: 'Julia', nota: 8.9, bolsista: true }
]

console.log(alunos.map(function (a) {
    return a.nota
}))

const resultado = alunos.map(function (a) {
    return a.nota
}).reduce(function (anterior, atual) {
    console.log(anterior, atual)
    return anterior + atual
})

console.log(resultado)


// Desafio 1: Todos os alunos são bolsistas
const todosBolsistas = function (resultado, bolsista) {
    return resultado && bolsista
}
console.log(alunos.map(function (a) {
    return a.bolsista
}).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = function (resultado, bolsista) {
    return resultado || bolsista
}
console.log(alunos.map(function (a) {
    return a.bolsista
}).reduce(algumBolsista))