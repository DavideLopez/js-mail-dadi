console.log('dadi')

//gioco dadi
// lancia i dadi per generare un numero casuale tra 1 e 6, uno per il giocatore, uno per il computer
// stabilire il vincitore in base al punteggio
// possibilità di pareggio

let result = document.getElementById('result')

let bttn = document.getElementById('bttn')

bttn.addEventListener('click', 
function () {

    //dado lanciato dall'utente
    var punteggioUtente = Math.floor(Math.random() * 6 + 1);
    console.log('utente', punteggioUtente);

    //dado lanciato dal computer
    var PunteggioComputer = Math.floor(Math.random() * 6 + 1);
    console.log('computer', PunteggioComputer);

    if (punteggioUtente < PunteggioComputer) {
        result.innerHTML = 'hai perso!! il tuo numero è ' + punteggioUtente + ' il punteggio del computer è ' + PunteggioComputer   
    } else if (punteggioUtente > PunteggioComputer) {
        result.innerHTML = 'hai vinto!! il tuo numero è ' + punteggioUtente + ' il punteggio del computer è ' + PunteggioComputer
    } else if ( punteggioUtente === PunteggioComputer) {
        result.innerHTML = "ops.... il punteggio è di parità!"
    }
      console.log(result.innerHTML)
}
)