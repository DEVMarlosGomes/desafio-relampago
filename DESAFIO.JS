// Função para calcular o preço final com imposto
function calculaPrecoFinal(produto, preco, aliquota) {
    return preco + (preco * (aliquota / 100));
}

// Importando o módulo 'prompt-sync' para capturar dados do usuário
const prompt = require("prompt-sync")();  

// Capturando os dados do usuário
let produto = prompt("Digite o produto: ");
let preco = Number(prompt("Digite o preço: "));
let imposto = Number(prompt("Digite a alíquota de imposto (%): "));

// Calculando o preço final com imposto
let precoFinal = calculaPrecoFinal(produto, preco, imposto);

// Exibindo os dados do produto e o preço final com imposto
console.log(`Produto: ${produto}`);
console.log(`Preço: R$${preco.toFixed(2)}`);
console.log(`Alíquota de imposto: ${imposto}%`);
console.log(`Preço final do produto com imposto: R$${precoFinal.toFixed(2)}`);
