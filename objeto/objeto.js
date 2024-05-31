const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 200

console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
    modelo: 'GR Corolla',
    preco: 399990.00,
    proprientario: {
        nome: 'Carlos',
        idade: 50,
        endereco: {
            logradouro: 'Rua Miramar',
            numero: 167
        }
    },
    consutores: [{
        nome: 'Junio',
        idade: 40
    }, {
        nome: 'Julia',
        idade: 32
    }],

    calcularValorSeguro: function () {
        let baseSeguro = this.preco * 0.05
        let idadeProprietario = this.proprientario.idade;
        if (idadeProprietario > 50) {
            let ajuste = (idadeProprietario - 50) * 0.001 * this.preco
            baseSeguro += ajuste
        }

        return baseSeguro
    }
}

const formatarReais = function (valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

console.log(`Nome do proprietário: ${carro.proprientario.nome}`)
console.log(`Idade do proprietário: ${carro.proprientario.idade} ano(s)`)
console.log(`Preço do carro: ${formatarReais(carro.preco)}`)
console.log(`Valor do seguro para o proprietário original: ${formatarReais(carro.calcularValorSeguro())}`)
console.log(carro)