
/** A fim de criar um mecanismo de busca para sua aplicação, você precisar iniciar craindo uma função para identificar palavras semelhantes. 
 
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. a função deverá filtrar as palabras do array que contêm nelas a string do primeiro parâmetro.

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação","profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/  


const buscarPalavrasSemelhantes = (termo, array) => {console.log(array.filter(function(palavra){return palavra.includes(termo)}))}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação","profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []