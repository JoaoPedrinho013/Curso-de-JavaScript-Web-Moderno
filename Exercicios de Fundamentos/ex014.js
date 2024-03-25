/** desenvolva uma função que recebe como parâmetro um objeto e retorne um array, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:
 
ObjetoParaArray({
nome: "Maria",
profissao: "Desenvovedora de Software"}) // Irá retornar [["nome","Maria"],["profissao","Desenvovedora de Software"]]
ObjetoParaArray({
codigo: 11111,
preco: 12000"}) // Irá retornar [["codigo",11111],["preco", 12000]] */

const ObjetoParaArray = objeto => {
    const newArray = []
    for (let chave in objeto) {
       let newArray2 = [chave, objeto[chave]]
       newArray.push(newArray2)
      }
    console.log(newArray)
}





ObjetoParaArray({nome: "Maria", profissao: "Desenvovedora de Software"}) //Irá retornar [["nome","Maria"],["profissao","Desenvovedora de Software"]]
//ObjetoParaArray({codigo: 11111, preco: 12000}) // Irá retornar [["codigo",11111],["preco", 12000]]
    