let dobro = function (a) {
    return 2 * a
}
console.log(dobro(3))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(5))

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())


function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa


let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)