/** Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.
 * 
 * ex:
 * removerPropiedade({a: 1, b: 2}, "a")// retornara {b:2}
 * removerPropiedade({
   id: 20,
   nome: "Caneta",
   descricao: "Nao preenchido"},
   "descricao") // retornara {id: 20, nome: "caneta"}
 */


const removerPropiedade = (objeto, item) => {
    delete objeto[item]
    console.log(objeto)
    console.log(Object.is(objeto))
}

removerPropiedade({ a: 1, b: 2 }, "a")// retornara {b:2}
removerPropiedade({ id: 20, nome: "Caneta", descricao: "Nao preenchido" }, "descricao") // retornara {id: 20, nome: "caneta"}