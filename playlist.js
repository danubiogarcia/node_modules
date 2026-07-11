// const prompt = require('prompt-sync')();
// // === ETAPA 1 ===

// // 1. Crie um array com pelo menos 5 titulos de musicas (iniciando o array)

// const playlist = ["Hotel California", "Imagine", "Billie Jean", "Smells Like Teen Spirit", "Bohemian Rhapsody"];
const playlist = ["hotel california", "imagine", "billie jean", "smells like teen spirit", "bohemian rhapsody"]; 

// // 2. Adicione pelo menos 3 musicas com push()
// playlist.push("Stayin' Alive");
// playlist.push("Sweet Child O' Mine");
// playlist.push("Like a Rolling Stone")

playlist. push("stayin' alive"); 
playlist.push("sweet child o' mine"); 
playlist.push("like a rolling stone");

// // 3. Exiba todas as musicas com um loop for...of
  // console.log("--- Minha Playlist ---");
// for (const musica of playlist) {
//     console.log(musica);

console.log("--- Minha Playlist ---");
for (const musica of playlist) {
  console.log(musica); 
}
console.log("----------------------\n");

// // 4. Verifique se "Bohemian Rhapsody" esta na lista com includes()
// if (playlist.includes("Bohemian Rhapsody")) {
//     console.log("Musica encontrada!");
// } else {
//     console.log("Musica nao encontrada.");
// }
  if (playlist.includes("bohemian Rhapsody")) {
      console.log("musica encontrada!"); 
  } else {
      console.log("musica nao encontrada.");
  }

// // 5. Remova a ultima musica com pop() e exiba qual foi removida
// const musicaRemovida = playlist.pop();
// console.log(`Música removida do final: ${musicaRemovida}`);



// // 6. Adicione uma nova musica no INICIO da lista com unshift()
// playlist.unshift("Yesterday");






// // Exibindo a lista final apenas para conferência
// console.log("\nPlaylist final atualizada:", playlist);
