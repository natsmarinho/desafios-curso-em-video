let num = [5,2,9,3];
num[3] = 7;
num.push(6);
num.push(1);
num.sort();

//percurso para exibição do vetor
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for(let pos in num) {
    console.log(num[pos])
}

console.log(`Nosso vetor é ${num} e o tamanho é de ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`A posição do 6 é de ${num.indexOf(6)}`)

num.push(9)
console.log(num)