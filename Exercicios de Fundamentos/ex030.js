/**Elabore uma funcao que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarao num array, conforme exemplo exemplo abaixo. Voce devera calcular a media da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas ex:
 * reberMelhorEstudante({
 * Joao: [8, 7.6, 8.9, 6], // media 7.625
 * MAriana: [9, 6.6, 7.9, 8],// media 7.875
 * Carla: [7,7,8,9] // media 7.75
 * }) // retornara { nome: "Mariana", media: 7.875}
 */


const reberMelhorEstudante = obj => {
    
    let melhorMedia = 0;
    let melhorEstudante = ''
  
    
    for (let aluno in obj) {
    
      let media = obj[aluno].reduce((acumulador, atual) => acumulador + atual, 0) / obj[aluno].length

      if (media > melhorMedia) {
        melhorMedia = media;
        melhorEstudante = aluno
      }
    }

    console.log({
      nome: melhorEstudante,
      media: melhorMedia
    })
  }
  

reberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // media 7.625
    Mariana: [9, 6.6, 7.9, 8],// media 7.875
    Carla: [7, 7, 8, 9] // media 7.75
}) // retornara { nome: "Mariana", media: 7.875}