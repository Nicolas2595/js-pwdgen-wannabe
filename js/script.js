/*
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

// Nome
var nomeUtente = prompt("Come ti chiami?");
console.log(nomeUtente);

// Cognome
var cognomeUtente = prompt("Qual'è il tuo cognome?");
console.log(cognomeUtente);

// Colore
var coloreUtente = prompt("Qual'è il tuo colore preferito?");
console.log(coloreUtente);

// Numero
var numero = 21;

// Scrive sulla pagina
document.getElementById("nome").innerHTML = nomeUtente + cognomeUtente + coloreUtente + numero;



