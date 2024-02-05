/*
SNACK 2 Genera un numero casuale tra 1 e 100
poi chiedi all'utente di indovinare il numero. 
Il programma poi deve far comparire un messaggio
"il numero è troppo alto" oppure "il numero è troppo basso"
nel momento in cui il numero detto dall'utente non è 
perfettamente uguale al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!
*/

const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let indovina;


do {

    indovina = Number(prompt("Indovina il numero (da 1 a 100)"));
    
    if (indovina <= 0 || indovina > 100 ) {
        alert("Hai inserito un numero non valido! Deve essere tra 1 e 100...")
    }

    if (indovina > randomNumber) {
        alert("hai scelto un numero più alto");
    } else {
        alert("hai scelto un numero più basso");
    }


} while (indovina === randomNumber);

const outputElement = document.getElementById("results");