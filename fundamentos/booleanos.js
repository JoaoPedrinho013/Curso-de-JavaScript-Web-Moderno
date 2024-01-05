let isAtive = false
console.log(isAtive)

isAtive = true
console.log(isAtive)

isAtive = 1
console.log(!isAtive)
console.log(!!isAtive)// ! é igual não e !! é o inverso "não não"

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtive = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtive = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || ''))

let nome = 'Corno'
console.log(nome || 'Desconhecido')

let nome1 = ''
console.log(nome1 || 'Desconhecido')