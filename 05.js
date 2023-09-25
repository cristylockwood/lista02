
let a = parseInt(prompt("Digite o valor de a: "));
let b = parseInt(prompt("Digite o valor de b: "));


if (a % b === 0 || b % a === 0) {
  console.log("São múltiplos.");
} else {
  console.log("Não são múltiplos.");
}
