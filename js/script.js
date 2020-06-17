// REGOLE GENERALI VARIABILI
var container = document.getElementById('biglietto');
var btnGenera = document.getElementById('btnGenera');
var btnAnnulla = document.getElementById('btnAnnulla');
var reset = document.getElementById('reset');


// Generare il biglieto
btnGenera.addEventListener("click", function() {
    // Input Personali Utente
    var nome = document.getElementById('nome').value;
    var numKm = document.getElementById('km').value;
    var fasciaEta = document.getElementById('eta').value;

    // Calcolo Biglietto
    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * numKm;
    var offerta = 'Biglietto Standard';

    // Condizioni calcolo biglietto
    if (fasciaEta == 'minorenne') {
        costoBiglietto -= costoBiglietto * 0.2;
        offerta = 'Sconto Minori';
    } else if (fasciaEta == 'over65') {
        costoBiglietto -= costoBiglietto * 0.4;
        offerta = 'Sconto Over 65';
    }

    // Controllo dei decimali
    costoBiglietto = costoBiglietto.toFixed(2) + '€';

    // Variabili Random
    var numCarrozza = Math.floor( Math.random() * 19) + 1;
    var codiceCt = Math.floor( Math.random() * (100000 - 90000) ) + 90000;

    // Inserimento valori finali
    document.getElementById('nome_pass').innerHTML = nome;
    document.getElementById('offerta_appl').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = numCarrozza;
    document.getElementById('codice_ct').innerHTML = codiceCt;
    document.getElementById('costo').innerHTML = costoBiglietto;

    // Class per attivare il ticket
    container.className = 'show';
});

// Reset biglietto
btnAnnulla.addEventListener("click", function() {
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';
    document.getElementById('nome_pass').value = '';
    document.getElementById('offerta_appl').value = '';
    document.getElementById('carrozza').value = '';
    document.getElementById('codice_ct').value = '';
    document.getElementById('costo').value = '';

    // Class per nascondere il ticket
    container.className = 'hidden';
});
