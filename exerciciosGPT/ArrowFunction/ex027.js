/**27 Crie uma arrow function que receba dois objetos como parâmetros e retorne um novo objeto com as propriedades dos dois objetos combinadas. */

const addObeject = (objeto1, objeto2) => {
    const newObject = {}

    for(indice in objeto1){

        newObject[indice] = objeto1[indice]

        //console.log(indice, objeto1, objeto1[indice])
    }
    for(indice in objeto2){
        newObject[indice] = objeto2[indice]
    }

    //console.log(`O primeiro Objeto => ${objeto1} junto com o segundo => ${objeto2} fica => ${newObject}`)
    
    // ESSA LINHA DE CIMA NAO PRINTA O OBJETO PQ O `` TRANSFORMA EM STRING AI APARECE "OBEJECT"

    
    console.log(`O primeiro Objeto => ${JSON.stringify(objeto1)} junto com o segundo => ${JSON.stringify(objeto2)} fica => ${JSON.stringify(newObject)} =D`)

}
addObeject({nome: 'João'}, {idade: 23.5})