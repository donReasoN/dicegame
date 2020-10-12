const btnRool = document.querySelector('.btn-rool');
const btnWait = document.querySelector('.btn-wait');
let cubeImg = document.querySelector('.cube__img');
let currentValue0 = document.querySelector('.current__value-0');
let currentValue1 = document.querySelector('.current__value-1');
const playerActive0 = document.querySelector('.player__name-0');
const playerActive1 = document.querySelector('.player__name-1');
let playerScore0 = document.querySelector('.player__score-0');
let playerScore1 = document.querySelector('.player__score-1');

let score, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

cubeImg.style.display = 'none';

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    currentValue0.textContent = '0';
    currentValue1.textContent = '0'; 
    playerActive0.classList.toggle('active');
    playerActive1.classList.toggle('active');
    cubeImg.style.display = 'none';
}

btnRool.addEventListener('click', function() {

    let dice = Math.floor(Math.random() * 6 + 1);
    cubeImg.style.display = 'block';
    cubeImg.src = 'cube-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('.current__value-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
});

btnWait.addEventListener('click',function() {
    scores[activePlayer] += roundScore;
    document.querySelector('.player__score-' + activePlayer).textContent = scores[activePlayer];
    

    if (scores[activePlayer] >= 20) {
        document.querySelector('.player__name-' + activePlayer).textContent = 'Zwycięzca';
        cubeImg.style.display = 'none';
        btnWait.setAttribute("disabled", "true");
        btnRool.setAttribute("disabled", "true");
        btnWait.style.backgroundColor = 'black';
        btnRool.style.backgroundColor = 'black';
    } else {
        nextPlayer();
    }

})



