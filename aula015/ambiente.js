let num = [5, 8, 2, 9, 3]

num[5] = 4
num.sort()

console.log(num)
console.log(`nosso vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)

if (pos == -1) {
    console.log(`o valor não foi encontrado`)
} else {
console.log(`o valor 9 está na posição ${pos}`)
}
