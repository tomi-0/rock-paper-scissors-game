const rockElement = document.querySelector('.js-rock-button');
const paperElement = document.querySelector('.js-paper-button');
const scissorsElement = document.querySelector('.js-scissors-button');

const score = {
    wins: 0,
    losses: 0,
    ties: 0,
}

rockElement.addEventListener('click', () => {
    playGame('rock');
})
paperElement.addEventListener('click', () => {
    playGame('paper');
})
scissorsElement.addEventListener('click', () => {
    playGame('scissors');
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


function playGame(playerMove) {
    const computerMove = generateComputerMove();
    console.log(computerMove);
    
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
            score.loses++;
        } else if (computerMove === 'paper') {
            console.log('win');
            score.wins++;
        } else if (computerMove === 'scissors') {
            console.log('tie');
            score.ties++;
        }
    }
    console.log(score);
}