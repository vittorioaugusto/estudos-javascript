const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 210
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


// Cadeia de protótipos (prototype chain)
const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }
console.log(filho.atributo1, filho.atributo2, filho.atributo3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const mercedes = {
    modelo: 'AMG GT',
    velMax: 356
}

const audi = {
    modelo: 'A5',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(mercedes, carro)
Object.setPrototypeOf(audi, carro)
console.log(mercedes)
console.log(audi)

mercedes.acelerarMais(100)
console.log(mercedes.status())

audi.acelerarMais(100)
console.log(audi.status())


const pai1 = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai1, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    if (filha2.hasOwnProperty(key)) {
        console.log(key)
    } else {
        console.log(`Por herança: ${key}`)
    }
}


function meuObjeto() { }
console.log(meuObjeto.prototype)

const objeto1 = new meuObjeto
const objeto2 = new meuObjeto
console.log(objeto1.__proto__ === objeto2.__proto__)
console.log(meuObjeto.prototype === objeto1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function () {
    return `Bom dia! Meu nome é ${this.nome}!`
}

objeto2.nome = 'Rafael'

console.log(objeto1.falar())
console.log(objeto2.falar())

const objeto3 = {}
objeto3.__proto__ = meuObjeto.prototype
objeto3.nome = 'Objeto 3'
console.log(objeto3.falar())


function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 1234)
const aula2 = new Aula('Até Breve', 4567)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 1234)
const aula4 = novo(Aula, 'Até Breve', 4567)
console.log(aula3, aula4)