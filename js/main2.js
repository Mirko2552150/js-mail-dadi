
var giocatoreUmano = prompt("nome giocatore Umano")
console.log(giocatoreUmano);
document.getElementById("uman").innerHTML = giocatoreUmano;

var giocatoreFittizio = "Computer";
console.log(giocatoreFittizio);
document.getElementById("pc").innerHTML = giocatoreFittizio;

var tiroDadiGiocatoreUmano = Math.floor(Math.random() * 10) + 1;
console.log(tiroDadiGiocatoreUmano);
document.getElementById("tiro-um").innerHTML = tiroDadiGiocatoreUmano;

var tiroDadiGiocatoreFittizio = Math.floor(Math.random() * 10) + 1;
console.log(tiroDadiGiocatoreFittizio);
document.getElementById("tiro-pc").innerHTML = tiroDadiGiocatoreFittizio;


if (tiroDadiGiocatoreUmano > tiroDadiGiocatoreFittizio) {
    console.log("giocatore Umano WIN");
    document.getElementById("risultato").innerHTML = tiroDadiGiocatoreFittizio;
} elseif (tiroDadiGiocatoreUmano > tiroDadiGiocatoreFittizio) {
    console.log("giocatore Fittizio WIN");
} else {
    console.log("Drow");
}
