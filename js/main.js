
const numeroKm = parseInt(prompt('Inserisci numero km che vuoi percorrere'));
const eta = parseInt(prompt('Inserisci latua età'));
const costoKm = 0.21;

if (isNaN (numeroKm) || isNaN(eta)) {
    alert('Valore inserito non valido!');
} else {
    alert('Il valore inserito è: ' + numeroKm );

    let prezzo = costoKm * numeroKm;
    let messaggio = '';

    if (eta < 18) {

        const sconto = prezzo * 0.2;

        prezzo = prezzo - sconto;

        messaggio = ' 20% di sconto young! prezzo ' + prezzo.toFixed(2) + '€';

    } else if (eta > 65) {

        const sconto = prezzo * 0.4;

        prezzo = prezzo - sconto;

        messaggio = ' 40% di sconto senior! prezzo ' + prezzo.toFixed(2) + '€';


    } else {
        messaggio = ' Il di prezzo del biglietto è ' + prezzo.toFixed(2)+ '€';
    }

    alert(messaggio);


}





// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.