// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função para mostrar o valor em R$
const formatarReais = function (valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}


// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 1999.99, 0.25)

console.log(`Produto: ${p1.nome} | Preço: ${formatarReais(p1.preco)} | Desconto: ${formatarReais(p1.desconto)} | Preço com Desconto: ${formatarReais(p1.getPrecoComDesconto())}`)
console.log(`Produto: ${p2.nome} | Preço: ${formatarReais(p2.preco)} | Desconto: ${formatarReais(p2.desconto)} | Preço com Desconto: ${formatarReais(p2.getPrecoComDesconto())}`)


// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Carla', 11400, 1)

console.log(`O Salário base de ${f1.nome} é de ${formatarReais(f1.salarioBase)} | Faltas: ${f1.faltas} | Seu salário ficou ${formatarReais(f1.getSalario())}`)
console.log(`O Salário base de ${f2.nome} é de ${formatarReais(f2.salarioBase)} | Faltas: ${f2.faltas} | Seu salário ficou ${formatarReais(f2.getSalario())}`)


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)