const display = document.getElementById('display');

// Voegt cijfers of symbolen toe aan het scherm
function appendValue(value) {
    display.value += value;
}

// Maakt het hele scherm leeg
function clearDisplay() {
    display.value = '';
}

// Verwijdert het laatste karakter (backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Berekent de formule op het scherm
function calculate() {
    try {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Fout';
    }
}

// Luisteren naar toetsenbord invoer
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Toestaan van cijfers en rekenkundige tekens
    if (/[0-9\.\+\-\*\/]/.test(key)) {
        appendValue(key);
    } 
    // Enter-toets voert de berekening uit
    else if (key === 'Enter') {
        event.preventDefault(); // Voorkomt ongewenst gedrag van de browser
        calculate();
    } 
    // Backspace verwijdert het laatste karakter
    else if (key === 'Backspace') {
        deleteLast();
    } 
    // Escape-toets maakt het scherm leeg
    else if (key === 'Escape') {
        clearDisplay();
    }
});
