// ==========================================
// EXERCÍCIOS - TÓPICO: ESTRUTURAS CONDICIONAIS
// Curso: Programador de Sistemas - Senac Centro
// ==========================================

// ------------------------------------------
// EXERCÍCIO 1: Estrutura "if" (Verificação de Idade)
// ------------------------------------------
// Instruções:
// Crie uma variável "idade" com um valor numérico.
// Se a idade for maior ou igual a 18, exiba no console: "Entrada autorizada."

console.log("--- EXERCÍCIO 1: IDADE ---");
// Escreva seu código abaixo:

let idade = 20;

if (idade >= 18){

    console.log ("entrada autorizada");

}






// ------------------------------------------
// EXERCÍCIO 2: Estrutura "if / else" (Par ou Ímpar)
// ------------------------------------------
// Instruções:
// Crie uma variável "numero" com um valor inteiro de sua escolha.
// Verifique se o número é par ou ímpar utilizando o operador de resto da divisão (%).
// Se for par, exiba "O número é Par!". Caso contrário, exiba "O número é Ímpar!".

console.log("\n--- EXERCÍCIO 2: PAR OU ÍMPAR ---");
// Escreva seu código abaixo:

 let numero = 7; 
 if (numero % 2 === 0){

    console.log("numero e par");
 
}else{
  console.log("numero e impar");

 }



// ------------------------------------------
// EXERCÍCIO 3: Estrutura "else if" (Faixa Etária)
// ------------------------------------------
// Instruções:
// Crie uma variável "idadeUsuario" com um valor numérico.
// Classifique em faixas etárias:
// - Se idade for menor que 12: exiba "Categoria: Criança"
// - Se idade for menor que 18: exiba "Categoria: Adolescente"
// - Caso contrário (senão): exiba "Categoria: Adulto"

console.log("\n--- EXERCÍCIO 3: FAIXA ETÁRIA ---");
// Escreva seu código abaixo:
idade = 95; 
  if (idade <= 12){ 
    console.log("categoria: Criança"); 
}  else if (idade < 18){
    console.log("categoria: Adolescente");  
} else {
     console.log("categoria: Adulto"); 

}


// ------------------------------------------
// EXERCÍCIO 4: Desafio Final (Aprovação Escolar)
// ------------------------------------------
// Instruções:
// Dadas três variáveis: "nota1" (number), "nota2" (number) e "frequencia" (number).
// Calcule a média aritmética das duas notas.
// Aplique as regras de aprovação do Senac:
// - Aprovado: Média maior ou igual a 7 E Frequência maior ou igual a 75%
// - Recuperação: Média maior ou igual a 5 (e menor que 7) E Frequência maior ou igual a 75%
// - Reprovado: Nos demais casos (Média menor que 5 OU Frequência menor que 75%)
// Imprima a mensagem correspondente no terminal de forma clara.

console.log("\n--- EXERCÍCIO 4: APROVAÇÃO ESCOLAR ---");
// Escreva seu código abaixo:
let "nota1" = 7.5;
let "nota2" = 6.5; 
  if media = (nota1 + nota2) / 2; 
   if (media >= 7 && frequencia >=75) 

  console.log (`Aluno Aprovado com meida ${media}) e frequencia{frequencia}%.`);  
else 


// ------------------------------------------
// EXERCÍCIO 5: Menu de Atendimento (switch/case)
// ------------------------------------------
// Instruções:
// Crie uma variável "opcao" contendo um número de 1 a 4 (pode ler via prompt).
// Utilize a estrutura "switch/case" para avaliar a opção:
// - Case 1: exiba "Falar com Atendente"
// - Case 2: exiba "Falar com Financeiro"
// - Case 3: exiba "Falar com Suporte Técnico"
// - Case 4: exiba "Sair do Menu"
// - Default: exiba "Opção não reconhecida. Tente novamente."

console.log("\n--- EXERCÍCIO 5: MENU DE ATENDIMENTO ---");
// Escreva seu código abaixo:

let opcao = prompt ("Escolha uma opção"); 
switch (opcao){ 
  case 1: 
      console.log ("falar com atendente");
       break 
  case 2: 
      console.log ("falar com finaceiro ");
       break; 
   case 3: 
       console.log("fala com suporte técnico");    
       break;
   case 4: 
   console.log("sair do meu"); 
   berak;

 



  




