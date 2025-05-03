// Rock, paper, scissors: refactored with functions

const initGame = () => {
    const startGame = confirm("Shall we play rock, scissors, paper?");
    startGame ? playGame() : alert("Ok, maybe next time.");
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, scissors, or paper.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLocaleLowerCase();
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
};

const decideNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock"
        || playerChoice === "paper"
        || playerChoice === "scissors"
    ) {
        return playerChoice
    } else {
        return false;
    }
};

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "scissors", "paper"];
    return rpsArray[computerChoice];
};

const determineWinner = (playerOne, computer) => {
    const winner =
        playerOne === computer ?
        "It's a tie!" :
        computer === "paper" && playerOne === "scissors" ?
        `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
        : computer === "scissors" && playerOne === "rock" ?
        `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
        : computer === "rock" && playerOne === "paper" ?
        `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
        : `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`
    
        return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();