
var giocatoreUmano = prompt("nome giocatore Umano")
console.log(giocatoreUmano);
document.getElementById("uman").innerHTML = giocatoreUmano;

var giocatoreFittizio = "Computer";
console.log(giocatoreFittizio);
document.getElementById("pc").innerHTML = giocatoreFittizio;

var tiroDadiGiocatoreUmano = Math.floor(Math.random() * 6) + 1; //Flor paviemento + 1 xk parte da 0
console.log(tiroDadiGiocatoreUmano);
document.getElementById("tiro-um").innerHTML = tiroDadiGiocatoreUmano;

var tiroDadiGiocatoreFittizio = Math.floor(Math.random() * 6) + 1;
console.log(tiroDadiGiocatoreFittizio);
document.getElementById("tiro-pc").innerHTML = tiroDadiGiocatoreFittizio;


if (tiroDadiGiocatoreUmano > tiroDadiGiocatoreFittizio) {
    console.log("giocatore Umano WIN");
    document.getElementById("risultatoUno").setAttribute("class","visible");
} else if (tiroDadiGiocatoreUmano < tiroDadiGiocatoreFittizio) {
    console.log("giocatore Fittizio WIN");
    document.getElementById("risultatoDue").setAttribute("class","visible");
} else {
    console.log("Drow");
    document.getElementById("risultatoTre").setAttribute("class","visible");
}
