function criarPessoa() {
    return {
        nome: 'Maria',
        sobrenome: 'Maia'
    }
}

console.log(criarPessoa())


function criarProduto(nome, preco, desconto = 0.20) {
    const precoComDesconto = preco - (preco * desconto)
    return {
        nome,
        preco,
        desconto,
        precoComDesconto
    }
}

console.log(criarProduto('Notebook', 2999.90))
console.log(criarProduto('Camisa', 39.90))


const criarPessoa = function (nome, idade) {
    return {
        falar: function () {
            console.log(`Meu nome é ${nome} e tenho ${idade} ano(s)`)
        }
    }
}

const pessoa1 = criarPessoa('João', 24)
pessoa1.falar()


function criarProduto(nome) {
    return {
        objeto: function () {
            console.log(`Nome do produto: ${nome}`)
        }
    }
}

const produto1 = criarProduto('PC')
produto1.objeto()