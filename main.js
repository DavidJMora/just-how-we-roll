/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

/*
# ========================================================
# = Roll Functions
# ========================================================
*/
function rollD6() {
    const min = Math.ceil(1);
    let randomNumber = Math.ceil(Math.random() * (min + 5));
    sixes.push(randomNumber);
    const sixesMean = sixes.reduce((a,b) => a + b, 0);
    sixes.sort(function(a,b) {return a-b;} );
    const median = Math.floor(sixes.length/2);
    document.querySelector('#d6-rolls-mean').innerText = (sixesMean / sixes.length).toFixed(2);
    switch(randomNumber) {
        case 1:
        document.querySelector('#d6-roll').src = './images/d6/1.png';
        break;

        case 2:
        document.querySelector('#d6-roll').src = './images/d6/2.png';
        break;

        case 3:
        document.querySelector('#d6-roll').src = './images/d6/3.png';
        break;

        case 4:
        document.querySelector('#d6-roll').src = './images/d6/4.png';
        break;

        case 5:
        document.querySelector('#d6-roll').src = './images/d6/5.png';
        break;

        case 6:
        document.querySelector('#d6-roll').src = './images/d6/6.png';
        break;
        
    }

    if(sixes.length % 2) {
        document.querySelector('#d6-rolls-median').innerText = sixes[median];
    }else {
        document.querySelector('#d6-rolls-median').innerText = (sixes[median - 1] + ' / ' + sixes[median]);
    }
}
function rollDoubleD6() {
    const randomRoll = getRandomRoll(1, 5);
    doubleSixes.push(randomRoll);
    const randomRoll2 = getRandomRoll(1, 5);
    doubleSixes.push(randomRoll2);
    const mean = calcMean(doubleSixes);
    document.querySelector('#double-d6-rolls-mean').innerText = mean;
    const median = calcMedian(doubleSixes);
    document.querySelector('#double-d6-rolls-median').innerText = median;

}
function rollD12() {
    const randomNumber = getRandomRoll(1, 11);
    twelves.push(randomNumber);
    const mean = calcMean(twelves);
    document.querySelector('#d12-rolls-mean').innerText = mean;
    const median = calcMedian(twelves);
    document.querySelector('#d12-rolls-median').innerText = median;
}
function rollD20() {
    const randomNumber = getRandomRoll(1, 19);
    twenties.push(randomNumber);
    const mean = calcMean(twenties);
    document.querySelector('#d20-rolls-mean').innerText = mean;
    const median = calcMedian(twenties);
    document.querySelector('#d20-rolls-median').innerText = median;
}
function resetAllRolls() {}
/*
# ========================================================
# = Math Functions
# ========================================================
*/
function getRandomRoll (a, b) {
    let min = Math.ceil(a);
    let randomNumber = Math.ceil(Math.random() * (min + b));
    return randomNumber;
}

function calcMean (array) {
    const sum = array.reduce((a,b) => a + b, 0);
    return (sum / array.length).toFixed(2);
}

function calcMedian (array) {
    array.sort(function(a,b) {return a-b;} );
    const median = Math.floor(array.length/2);

    if(array.length % 2) {
       return array[median];
    }else {
       return (array[median - 1] + ' / ' + array[median]);
    }

}

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

