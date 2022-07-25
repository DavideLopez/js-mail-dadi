console.log('MAIL')

//chiedi all'utente il suo indirizzo email
// controlla che sia nella lista di utenti autorizzati ad accedere
// stampare un messaggio del risultato

//chiedi all'utente il suo indirizzo email
let mailUtente = prompt('inserisci il tuo indirizzo Email, per favore :)');
const emailArray = ["geraltdirivia@wolf.com", "test@test.com", "maurone@gmail.com", "pancopinco@gmail.com"]

let answer = document.getElementById("answer")

// stampare un messaggio del risultato - OPZIONE NEGATIVA
answer.innerHTML = "Spiacente, l'indirizzo email non corrisponde a nessun utente registrato nel nostro sistema"

// stampare un messaggio del risultato - OPZIONE CONFERMATA

for(let i = 0; i < emailArray.length; i++) {
    if(mailUtente === emailArray[i]) {
        var right = "L'indirizzo email è corretto! sei autorizzato all'accesso"
        answer.innerHTML = right
    }
}

