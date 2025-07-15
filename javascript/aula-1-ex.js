//criar algoritmo que calcule a média de consumo de gasolina de um carro com base no consumo mensal.
//julho: 670L
//rodou 1000km
//Por dia qual a média de consumo de gasolina do carro?

// const consumoMensal = 670;
// const distanciaMensal = 1000;
// const diasNoMes = 31; //considerando o mês de julho

// const mediaDiaria = consumoMensal / distanciaMensal;

// console.log()


//Criar um algoritmo que calcule a area de uma parede com base na largura e altura.

//  const largura = 10;
//  const altura = 2;

// const area = largura * altura;

// console.log(`A área da parede é: ${area.toFixed(2)}m2`)


// //Criar um algoritmo que calcule a area de uma parede e me diga quantos litros de tinta são necessários para pintar essa parede, sabendo que 1L de tinta pinta 2m2.
// const largura = 5.40;
// const altura = 8.50;
// const tinta = 3;

// const area = largura * altura;
// const litrosTinta = area / 2;
// console.log(`A área da parede é: ${area.toFixed(2)}m²`);
// console.log(`Serão necessários ${litrosTinta.toFixed(2)}L de tinta para pintar essa parede.`);
// // console.log(`A área da parede é: ${area.toFixed(2)}m² e serão necessários ${litrosTinta.toFixed(2)}L de tinta para pintar essa parede.`);


//if (idade >=18) {
//   console.log("Você é maior de idade");
//} else {
//   console.log("Você é menor de idade");
//}

//Criar um algoritmo que calcule a area de uma parede e faça o orçamento de um pintor sabendo que o pintor cobra 10 reais por metro quadrado pintado.
// se a área for maior que 10m2 o pintor cobra uma taxa adicional de 20% sobre o valor da area.

const largura = 4.70;
const altura = 10.78;

const area = largura * altura;
const valorPintura = area * 10;
const valorPorMetro = 10;
const valorTotal = area * valorPorMetro;

if (area > 10) {
  const taxaAdicional = valorTotal * 0.2;
  console.log(`
    a area da parede é: R$ ${area.toFixed(2)}
    O valor total é: $calculoTotal.toFixed(2)}
    `)
  
 
} else {
  console.log 
}