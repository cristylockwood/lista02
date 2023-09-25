
let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));
let nota3 = parseFloat(prompt("Digite a nota da terceira prova: "));


let media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;


if (media >= 7) {
  console.log(`Média: ${media.toFixed(2)} - APROVADO`);
} else if (media >= 5 && media < 7) {
  console.log(`Média: ${media.toFixed(2)} - RECUPERAÇÃO`);
} else {
  console.log(`Média: ${media.toFixed(2)} - REPROVADO`);
}
