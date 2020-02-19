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

var mailIscritti = ["mario@gmail.com", "maria@gmail.com", "marietto@gmail.com", "marione@gmail.com"];
console.log(mailIscritti);

// if (mailIscritti = @) {
//     console.log("è una mail" + mailIscritti );
// } else {
//
// }

// Richiediamo la mail all'invitato

var mailInvitato = prompt("inserisci la tua mail");
console.log(mailInvitato);
