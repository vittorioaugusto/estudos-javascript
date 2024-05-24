// Valor padrão do es2015
function soma(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0))