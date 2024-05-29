let a = 1
let b = 2
let c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }

console.log(obj1)
console.log(obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.87
const obj3 = { [nomeAtributo]: valorAtributo }
console.log(obj3)

const obj4 = {
    funcao() {

    }
}

console.log(obj4)