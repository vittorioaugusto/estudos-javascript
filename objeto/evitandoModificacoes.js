// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(`Extensível: ${Object.isExtensible(produto)}`)

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal
const pessoa = { nome: 'Julia', idade: 30 }
Object.seal(pessoa)
console.log(`Selado: ${Object.isSealed(pessoa)}`)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 34
console.log(pessoa)


// Object.freeze
const empresa = {
    nome: "Tech Co.",
    endereco: {
        rua: "Av. XYZ",
        numero: 123
    }
};

Object.freeze(empresa)
empresa.endereco.numero = 456
console.log(empresa.endereco.numero) 