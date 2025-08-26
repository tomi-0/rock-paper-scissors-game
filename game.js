// Creting elements for all buttons onwebpage
const rockElement = document.querySelector('.js-rock-button');
const paperElement = document.querySelector('.js-paper-button');
const scissorsElement = document.querySelector('.js-scissors-button');
const resetScoreElement = document.querySelector('.js-reset-score-button')
const autoPlayElement = document.querySelector('.js-auto-play-button')

// score object to store score
const score = {
    wins: 0,
    losses: 0,
    ties: 0,
}
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
})


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
    console.log(computerMove);

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
            console.log('tie');
            score.ties++;
        } else if (computerMove === 'paper') {
            console.log('lose');
            score.losses++;
        } else if (computerMove === 'scissors') {
            console.log('win');
            score.wins++;
        }
    }

    if (playerMove==='paper') {
        if (computerMove ==='rock') {
            console.log('win');
            score.wins++;
        } else if (computerMove === 'paper') {
            console.log('tie');
            score.ties++;
        } else if (computerMove === 'scissors') {
            console.log('lose');
            score.losses++;
        }
    }

    if (playerMove==='scissors') {
        if (computerMove ==='rock') {
            console.log('lose');
            score.losses++;
        } else if (computerMove === 'paper') {
            console.log('win');
            score.wins++;
        } else if (computerMove === 'scissors') {
            console.log('tie');
            score.ties++;
        }
    }
    console.log(score);
		
		// re-renders score on webpage
    renderScore();
}