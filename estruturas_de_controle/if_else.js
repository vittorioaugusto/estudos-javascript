const resultadoNota = function (nota) {
    if (nota >= 7) {
        return `Aprovado com a nota: ${nota}`
    } else {
        return `Reprovado com a nota: ${nota}`
    }
}

console.log(resultadoNota(7))
console.log(resultadoNota(5))