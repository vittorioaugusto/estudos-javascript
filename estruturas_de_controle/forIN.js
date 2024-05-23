const nota = [4.2, 5.8, 7.6, 8.5]

for (let i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 30,
    peso: 74
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}