let numero = 1 // escopo global
{
    let numero = 2 // escopo local
    console.log('dentro =', numero)
}
console.log('fora =', numero)