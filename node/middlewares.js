// middleware patter ( chain of responsability )

const passo1 = (contexto, next) => {
    contexto.valor1 = 'middleware 1'
    next()
}
const passo2 = (contexto, next) => {
    contexto.valor2 = 'middleware 2'
    next()
}
const passo3 = contexto =>  contexto.valor3 = 'middleware 3'

const executar = (contexto, ...middlewares) => {
    const executarPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0)
}

const contexto = {}

executar(contexto, passo1, passo2, passo3)
console.log(contexto)