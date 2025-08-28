// Creting elements for all buttons onwebpage
const rockElement = document.querySelector('.js-rock-button');
const paperElement = document.querySelector('.js-paper-button');
const scissorsElement = document.querySelector('.js-scissors-button');
const resetScoreElement = document.querySelector('.js-reset-score-button')
const autoPlayElement = document.querySelector('.js-auto-play-button')

// score object to store score
const score = JSON.parse(localStorage.getItem('score')) || {
		wins: 0,
    losses: 0,
    ties: 0 }; 
renderScore();

// Added event listeners to each button
rockElement.addEventListener('click', () => {
    playGame('rock');
})
paperElement.addEventListener('click', () => {
    playGame('paper');
})
scissorsElement.addEventListener('click', () => {
    playGame('scissors');
})

// resets score back to 0
resetScoreElement.addEventListener('click', () => {
	score.wins = 0;
	score.losses = 0;
	score.ties = 0;
	renderScore();
	saveToStorage();
})

// starts autoplay mode
let isAutoPlay = false;
let autoPlayIntervalId;

autoPlayElement.addEventListener('click', () => {
	if (isAutoPlay) {
		clearInterval(autoPlayIntervalId);
		// chnage button back to normal
		autoPlayElement.classList.remove('stop-auto-play');
		autoPlayElement.innerHTML = 'Auto Play';
		isAutoPlay = false;
	} else {
		isAutoPlay = true;
		// play every 1 second
		autoPlayIntervalId = setInterval( () => {
		const playerMove = generateComputerMove();
		playGame(playerMove);
		}, 1000);

		//change style of auto play button
		autoPlayElement.innerHTML = 'Stop';
		autoPlayElement.classList.add('stop-auto-play');
	}
	}
);



function generateComputerMove() {
    const randomNum = Math.random();
    if (randomNum < 1/3) {
        return 'rock';
    } else if (randomNum < 2/3) {
        return 'paper';
    } else if (randomNum < 1) {
        return 'scissors';
    }
}

function renderScore() {
	const resultElement = document.querySelector('.js-results-container');
	resultElement.innerHTML = `
		<div class="win-result">Wins: <span class="score">${score.wins}</span></div>
		<div class="loss-result">Losses: <span class="score">${score.losses}</span></div>
		<div class="tie-result">Ties: <span class="score">${score.ties}</span></div>
	`;
}


function playGame(playerMove) {
    const computerMove = generateComputerMove();

		// adds images to webpage for each move played
		const playerMoveImage = document.querySelector('.js-player-move');
		const computerMoveImage = document.querySelector('.js-computer-move');
		playerMoveImage.innerHTML = `
			You:
			<img class="move-image" src="images/${playerMove}.png">
		`;
		computerMoveImage.innerHTML = `
			Computer:
			<img class="move-image" src="images/${computerMove}.png">
		`;

		// process moves and displays result
    if (playerMove==='rock') {
        if (computerMove ==='rock') {
            score.ties++;
        } else if (computerMove === 'paper') {
            score.losses++;
        } else if (computerMove === 'scissors') {
            score.wins++;
        }
    }

    if (playerMove==='paper') {
        if (computerMove ==='rock') {
            score.wins++;
        } else if (computerMove === 'paper') {
            score.ties++;
        } else if (computerMove === 'scissors') {
            score.losses++;
        }
    }

    if (playerMove==='scissors') {
        if (computerMove ==='rock') {
            score.losses++;
        } else if (computerMove === 'paper') {
            score.wins++;
        } else if (computerMove === 'scissors') {
            score.ties++;
        }
    }
		
		// re-renders score on webpage
    renderScore();
		
		saveToStorage();
}

// saves score to local storgae 
function saveToStorage() {
	localStorage.setItem('score', JSON.stringify(score));
}