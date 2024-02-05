alert("Inserisci un numero. Se è pari ti restituisco il numero, sennò quello successivo");


let continua = true;

while (continua) {

    let numeroInserito = Number(prompt("Inserisci un numero. Inserisci 0 per fermare il loop!"));

    if (numeroInserito === 0) {
        continua = false;
    } else if (numeroInserito % 2 == 0) {
        alert("Il numero che hai inserito è pari: " + numeroInserito);
    } else {
        alert("Il numero che hai inserito è dispari. Il numero successivo è: " + (numeroInserito + 1));

    }

}

const end = document.getElementById("result").innerHTML = "Hai voluto finire questo ciclo infinito! Non hai tutti i torti!"
