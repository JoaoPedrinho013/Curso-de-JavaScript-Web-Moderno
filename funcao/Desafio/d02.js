/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */
function triangulos(l1=1, l2=1, l3=1) {
    if (l1 == l2 && l2 == l3){
        console.log(`Os três lados: ${l1}, ${l2}, ${l3} = Triângulo Equilátero`)
    }
    if (l1 == l2 || l2 == l3) {
        if (l1 != l2 || l2 != l3){
            console.log(`Os três lados: ${l1}, ${l2}, ${l3} = Triângulo Isósceles`)
        }
    }
    if (l1 != l2 && l2 != l3) {
        console.log(`Os três lados: ${l1}, ${l2}, ${l3} = Triângulo Escaleno`)
    }
}

triangulos(1, 1, 1)
triangulos(1, 2, 2)
triangulos(1, 2, 3)