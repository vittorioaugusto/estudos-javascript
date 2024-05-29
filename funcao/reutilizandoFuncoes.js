// Função para mostrar o valor em R$
const formatarReais = function (valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

// Função para mostrar o valor em US$
const formatarDolares = function (valor) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
}

// Função para mostrar o valor em €
const formatarEuros = function (valor) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valor);
}

console.log(formatarReais(1000));
console.log(formatarDolares(1000));
console.log(formatarEuros(1000));