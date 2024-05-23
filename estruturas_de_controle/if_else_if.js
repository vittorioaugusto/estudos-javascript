const imprimirIdade = function (idade) {
    if (idade < 12) {
        return `Você tem ${idade} ano(s) é Criança!`
    } else if (idade >= 12 && idade <= 18) {
        return `Você tem ${idade} ano(s) é Adolescente!`
    } else if (idade >= 18 && idade < 60) {
        return `Você tem ${idade} ano(s) é Adulto!`
    } else {
        return `Você tem ${idade} ano(s) é Idoso!`
    }
}

console.log(imprimirIdade(10))
console.log(imprimirIdade(12))
console.log(imprimirIdade(23))
console.log(imprimirIdade(67))