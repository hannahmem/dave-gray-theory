const initGame = () => {
    const starGame = confirm("Do you want to play a guess game?");
    starGame ? playGame() : alert("See you next time!");
};

const playGame = () => {
    while (true) {
        const playerDecision = getPlayerDecision();
        if (playerDecision === "") {
            invalidChoice();
            continue;
        }
        if (!playerDecision) {
            setNegativeDecision();
            break;
        }
        if (playerDecision) {
            const playerChoice = getPlayerChoice(playerDecision);
            if (playerChoice) {
                const randomNum = Math.floor(Math.random() * 5 + 1);
                if (playerChoice === randomNum) return correctResult();
                else
                    return incorrectResult(playerChoice, randomNum);
            } else {
                invalidChoice();
            }
        }
    }
}

const getPlayerDecision = () => {
    const playerDecision = prompt("Can you guess the number I am thinking from 1 to 5?");
    if (playerDecision || playerDecision == "") return playerDecision;
    else
        return false;
}

const invalidChoice = () => {
    return alert("You didn't choose a number from 1 to 5.");
}

const setNegativeDecision = () => {
    return alert("Let's play next time!");
}

const getPlayerChoice = (playerDecision) => {
    const playerChoice = Number(playerDecision);
    if (playerChoice > 0 && playerChoice < 6 || playerChoice === "")
        return playerChoice;
}

const correctResult = () => {
    const playAgain =
        confirm("Congratulations! You got the right number. Play again?")
    if (playAgain) {
        playGame();
    } else {
        return alert("Let's rock again next time!")
    }
}

const incorrectResult = (playerChoice, randomNum) => {
    const tryAgain =
        confirm(`You chose ${playerChoice}, but the correct number was ${randomNum}.\nTry again?`);
    if (tryAgain) {
        playGame();
    } else {
        return setNegativeDecision();
    }
}

initGame();