const produtos = [
    { nome: 'Notebook', preco: 2999.99, fragil: true },
    { nome: 'Tablet', preco: 1999.99, fragil: true },
    { nome: 'Copo de Vidro', preco: 9.99, fragil: true },
    { nome: 'Caixa de Plástico', preco: 29.99, fragil: false },
]

const todosProdutos = function (produto) {
    return true
}

const produtoCaro = function (produto) {
    return produto.preco >= 500
}

const produtoFragil = function (produto) {
    return produto.fragil
}

console.log(produtos.filter(todosProdutos))
console.log(produtos.filter(produtoCaro).filter(produtoFragil))