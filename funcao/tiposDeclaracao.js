console.log(soma(3, 4))// funciona em qualquer linha do codigo


// function declaration

function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x- y
}

console.log(sub(16, 3))
// named function expression

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(13, 3))