////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	if (playerMove === computerMove) {
		winner = 'tie';
	} else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
		winner = 'player';
	} else if ((playerMove === 'paper') && (computerMove === 'rock')) {
		winner = 'player';
	} else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
		winner = 'player';
	} else {
		winner = 'computer';
	}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
	while (playerWins < 5 && computerWins < 5) {
		var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
		console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
		if (getWinner(playerMove, computerMove) === 'player') {
			playerWins++;
			console.log("Player wins! Currently on " + playerWins + " wins!");
		} else if (getWinner(playerMove, computerMove) === 'computer') {
			computerWins++;
			console.log("Computer wins! Currently on " + computerWins + " wins!");
		} else {
			console.log("It's a tie, try again");
		}
	}
	if (playerWins === 5) {
		console.log("Final winner is Player! Computer had " + computerWins + " wins..")
	} else {
		console.log("Final winner is Computer! Player had " + playerWins + " wins..")
	}
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
	while (playerWins < x && computerWins < x) {
		var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
		console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
		if (getWinner(playerMove, computerMove) === 'player') {
			playerWins++;
			console.log("Player wins! Currently on " + playerWins + " wins!");
		} else if (getWinner(playerMove, computerMove) === 'computer') {
			computerWins++;
			console.log("Computer wins! Currently on " + computerWins + " wins!");
		} else {
			console.log("It's a tie, try again");
		}
	}
	if (playerWins === x) {
		console.log("Final winner is Player! Computer had " + computerWins + " wins..")
	} else {
		console.log("Final winner is Computer! Player had " + playerWins + " wins..")
	}
    return [playerWins, computerWins];
}

playTo(3);

