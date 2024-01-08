// funcao em JS é first-class object (citizens)
// higher-order function

// criar de forma literal
function fun1() {   
}

// Armazenar em uma variavel

const fun2 = function () { // funcao anonima
}

// armazenar em um array 
const array = [function (a, b ) { return a + b}, fun1, fun2]

console.log(array[0] (10, 3))

// armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'FAZ O L'}
console.log(obj.falar())

// passar funcao como parametro
function run(fun) {
    fun()
}
run(function () {console.log('Executando...')})

// uma funcao pode retornar/conter uma funcao

function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(3, 6) (4)
const cincoMais = soma(2, 3)
cincoMais(8)