const a = 1
const b = 2
const c = 3

// São iguais
const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c } // Nova forma
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) // 7.87

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4) // 7.87

const obj5 = {
    funcao1: function() {
        // ...
    },
    
    // Nova Forma
    funcao2() {
        // ...
    } 
}

console.log(obj5)

