const valores = [5.5, 34.3, 32.3, 23.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)


console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)