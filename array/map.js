const numero = [1, 2, 3, 4, 5]

let resultado = numero.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = function (e) {
    return e + 10
}
const triplo = function (e) {
    return e * 3
}
const paraDinheiro = function (e) {
    return `R$ ${parseFloat(e).toFixed(2).replace('.', '.')}`
}

resultado = numero.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


const carrinho = [
    { nome: 'Borracha', preco: 3.50 },
    { nome: 'Caderno', preco: 14.90 },
    { nome: 'Caneta', preco: 4.90 }
]

const apenasNome = function (produto) {
    return produto.nome
}

const apenasPreco = function (produto) {
    return produto.preco
}

const nomeEPreco = function (produto) {
    return `${produto.nome}: R$ ${parseFloat(produto.preco).toFixed(2).replace('.', '.')}`
}

const nome = carrinho.map(apenasNome)
const preco = carrinho.map(apenasPreco)
const resultado2 = carrinho.map(nomeEPreco)

console.log(nome)
console.log(preco)
console.log(resultado2)