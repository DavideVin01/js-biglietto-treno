console.log('JS OK');

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

/*
1 - Chiedere all'utente il numero di chilometri da percorrere
2 - Chiedere l'età del passeggero.
3 - Calcolare prezzo totale del viaggio in base a:
    3.1 - Prezzo del biglietto definito in base ai km (0.21 € al km)
    3.2 - Sconto del 20% per i minorenni
    3.3 - Sconto del 40% per gli over 65
4 - Inserire prezzo finale con massimo due decimali (centesimi)
*/

// #1 - #2
const userKm = parseInt(prompt('Quanti chilometri devi percorrere?').trim());
const userAge = parseInt(prompt('Quanti anni hai?').trim());

console.log(`I chilometri da percorrere sono: ${userKm}`);
console.log(`L'utente ha: ${userAge} anni`);

// #3

// const prezzoTotale = 0