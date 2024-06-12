const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 8.8 }
]

// Imperativo

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativa

const getNota = function (aluno) {
    return aluno.nota
}
const soma = function (total, atual) {
    return total + atual
}
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)