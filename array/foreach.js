const listaAprovados = ['Maria', 'José', 'Antônio', 'Beatriz']

listaAprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

const exibirAprovados = function (aprovado) {
    console.log(aprovado)
}

listaAprovados.forEach(exibirAprovados)


