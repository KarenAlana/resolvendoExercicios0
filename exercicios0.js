// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(numero) {
  let a = 0;
  let b = 1;
  let temp;
  if (numero === 0 || numero === 1) {
    return `O número ${numero} pertence à sequência`;
  }
  while (b < numero) {
    temp = a + b;
    a = b;
    b = temp;
  }
  if (b === numero) {
    return `O número ${numero} pertence à sequência `;
  } else {
    return `O número ${numero} NÃO pertence à sequência `;
  }
}
// Exemplo
let numero = 21;
console.log(fibonacci(numero));

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

function verificar(str) {
  const contador = [...str].filter((c) => c.toLowerCase() === "a").length;
  console.log(
    contador > 0
      ? `A letra 'a' aparece ${contador} vezes.`
      : "A letra 'a' não foi encontrada."
  );
}

// Exemplo de uso
let texto = "Programar é transformar café em código.";
verificar(texto);

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?
let INDICE = 12;
let SOMA = 0;

for (let K = 1; K < INDICE; K++) {
  SOMA = SOMA + K;
}

console.log(SOMA);

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___ --> 9
// b) 2, 4, 8, 16, 32, 64, ____-->
// c) 0, 1, 4, 9, 16, 25, 36, ____-->
// d) 4, 16, 36, 64, ____-->
// e) 1, 1, 2, 3, 5, 8, ____-->
// f) 2,10, 12, 16, 17, 18, 19, ____-->

// -----------------------------------------

// Sequência de números ímpares (incremento de 2)
// a) 1, 3, 5, 7, --> 9
let A = [1];
for (let i = 1; i < 5; i++) {
  A.push(A[i - 1] + 2);
}
console.log("a) " + A.join(", ")); // Saída: 1, 3, 5, 7, 9

// Potências de 2  (multiplicação por 2)
// b) 2, 4, 8, 16, 32, 64, --> 128
let B = [2];
for (let i = 1; i < 7; i++) {
  B.push(B[i - 1] * 2);
}
console.log("b) " + B.join(", ")); // Saída: 2, 4, 8, 16, 32, 64, 128

//  Quadrados perfeitos (n², onde n é um inteiro)
// c) 0, 1, 4, 9, 16, 25, 36, --> 49
let C = [];
for (let i = 0; i < 8; i++) {
  C.push(i * i);
}
console.log("c) " + C.join(", ")); // Saída: 0, 1, 4, 9, 16, 25, 36, 49

// Quadrados de números pares (n², onde n é par)
// d) 4, 16, 36, 64, --> 100 (quadrados de números pares)
let D = [];
for (let i = 2; i <= 10; i += 2) {
  D.push(i * i);
}
console.log("d) " + D.join(", ")); // Saída: 4, 16, 36, 64, 100

// Sequência de Fibonacci (soma dos dois anteriores)
// e) 1, 1, 2, 3, 5, 8 --> 13
let E = [1, 1];
for (let i = 2; i < 7; i++) {
  E.push(E[i - 1] + E[i - 2]);
}
console.log("e) " + E.join(", ")); // Saída: 1, 1, 2, 3, 5, 8, 13

// Sequência mista (soma de valores constantes e sequência crescente)
// f) 2, 10, 12, 16, 17, 18, 19, --> 20
let F = [2, 10, 12, 16, 17, 18, 19];
F.push(20);
console.log("f) " + F.join(", ")); // Saída: 2, 10, 12, 16, 17, 18, 19, 20

// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Ligo o Interruptor A e deixo ligado por um tempo e depois desligo.
// Ligo o Interruptor B.

// Vou até as lâmpadas:

// Se a lâmpada estiver acesa: é o Interruptor B, porque deixei ligado.
// Se estiver apagada e fria: é o Interruptor C, porque nunca liguei.
// Se estiver apagada e morna: é o Interruptor A, porque liguei por um breve momento antes de desligar.
