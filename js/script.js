document.getElementById('play').addEventListener('click', startGame);

function startGame() {
    // importa il value selezionato e assegna alla variabile globale gameMode la difficoltà
    const gameMode = getSelectValue();

    // creare la griglia in base alla difficolta selezionata
    const numberOfSquares = 0;
    if (gameMode === 'easy') {
        numberOfSquares = 100;
    }
    else if (gameMode === 'medium') {
        numberOfSquares = 81;
    }
    else if (gameMode === 'hard') {
        numberOfSquares = 49;
    }
    let generatedNumbers = generateSquaresNumbers(numberOfSquares);

    // Per ogni numero nell'array, creo una cella e la appendo al grid container
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    for(let i = 0; i < generatedNumbers.length; i++) {
        const thisNumber = generatedNumbers[i];
        const newGeneratedSquare = generateGridItem(thisNumber);

        // Attacco l'evento allo square
        newGeneratedSquare.addEventListener('click', handleSquareClick);
        
        // Aggiungo l'elemento alla griglia
        mainGrid.appendChild(newGeneratedSquare);
    }
}

// FUNCTIONS

// importa la difficoltà selezionata
function getSelectValue()
{
    let selectedValue = document.getElementById("difficulty").value;
    return selectedValue;
}

// al click su un quadrato aggiungo active e il colore
function handleSquareClick() {
    this.classList.add('active');
    const thisSquareNumber = parseInt( this.querySelector('span').textContent );
    this.classList.add('square-active');
}

// Creare un elemento della griglia
function generateGridItem(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`; 

    return newSquare;
}

// Genera un array con x numeri unici
function generateSquaresNumbers (quantityOfNumbers) {
    const numbersArray = [];
    while(numbersArray.length < quantityOfNumbers) {
        const randomNumber = getRndInteger(1, quantityOfNumbers);
        // Se il numero random non è gia presente in numbersArray lo pusho
        if( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }

    return numbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}