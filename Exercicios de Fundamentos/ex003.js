/**Desenvolva uma funcao que recebe dois parametros, um é a quantidade de horas trabalhadas por um funcionario no mes, e o quanto ele recebe por hora. O retorno da funcao deve ser a string "Salario igual a R$ X", e em que X é o quanto o funcionario ganhou no mes 
 * 
 * exemplo
 * calcularSalario(150, 40.5) // retornara "Salario igual a R$6075"
*/

const calcularSalario = (horas, pagamento) => console.log(`Salario igual a R$ ${horas * pagamento}`)

calcularSalario(150, 40.5)