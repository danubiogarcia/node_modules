console.log("\n--- EXERCÍCIO 5: ALTERANDO PROPRIEDADES ---");

// A) Crie um objeto chamado "celular"
const celular = {       
    marca: "iphone",     // Usou = para o objeto, adicionou a vírgula aqui
    modelo: "17",        // O modelo do iPhone costuma ser texto/string
    preco: 1000          // Corrigido para "preco" (sem ç) e sem aspas porque é um number
};

// B) Altere o preço do celular para um novo valor (dando desconto)
celular.preco = 800;     // Acessamos a propriedade com o ponto (.) e mudamos o valor

// C) Crie dinamicamente uma propriedade chamada "emEstoque"
celular.emEstoque = true; // Criamos uma propriedade que não existia antes usando o ponto (.)

// D) Imprima o objeto completo no console
console.log(celular);    // Sem aspas, para mostrar o objeto inteiro com todas as suas informações
  

console.log("Olá, Mundo!"); 
