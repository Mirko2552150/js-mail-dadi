// // SCOPO DEL GIOCO:
// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato
// Gioco dei dadi, chi fa di più vince
// -------------------------------------------------------------------------------------------
// Come vi dicevo prima non vi fate intimorire da EMAIL, ragionate semplicemente come se fosse una lista di nomi. Quindi nessun check.
// Quanto al gioco dei dadi non chiedete l’interazione utente, ma semplicemente fate partire due numeri casuali e confrontateli. Partite dagli strumenti che abbiamo visto a lezione, quindi come se poteste tirare un dado da 10 a colpire (ops ‘a colpire’ mi è sfuggita, [chissà chi l’ha colta]).
// Per me gli esercizi finiscono qui. Poi se piove e non avete altro di meglio da fare :joy: allora cercate di aggiungere qualcosetta, ma ripeto non è richiesta.

// Gioco uno
// Costruire elenco mail (Array)
// Controllo se è effettivamente una mail (presenza @)
// Controllo se la mail è presente in elenco
// Messaggio di conferma o meno

// Elenco iscritti Array

// farre check email con presenza @!!!!!

var mailIscritti = ["mario@gmail.com", "maria@gmail.com", "marietto@gmail.com", "marione@gmail.com"]; // Array
console.log(mailIscritti);

var mailInvitato = prompt("inserisci la tua mail"); // richiesta mail all'utente
console.log(mailInvitato);
var verifica = false; // variabile falsa


for (var i = 0; i <= mailIscritti.length; i++) {  // ciclo per controllo mail
    console.log(mailIscritti [i]);

    if (mailInvitato == mailIscritti [i]) { // è sia corretto che sbagliato, uno corretto per le altre 3 scorretto
        console.log("certified");
        verifica = true; // stessa variabile è anche vera

    }
}

if (verifica == true) { // se la variabile è identica == a true fa vedere pippo se no pippo2
    document.getElementById('pippo').setAttribute("class","visible");
} else {
    document.getElementById('pippo2').setAttribute("class","visible");
}
