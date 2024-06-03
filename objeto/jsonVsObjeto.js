const obj = {
    a: 1, b: 2, c: 3, soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

const pessoa = {
    "nome": 'Ana',
    "idade": 40,
    "legal": true,
    "filhos": [{
        "nome": 'Maicon',
        "idade": 20
    }, {
        "legal": false
    }]
}

console.log(JSON.stringify(pessoa))