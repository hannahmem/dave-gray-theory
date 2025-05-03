// Interactive game

let playGame = confirm("Shall we play rock, scissors, paper?");
if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, scissors, or paper.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase();

        if (playerOne === "rock"
            || playerOne === "paper"
            || playerOne === "scissors"
        ) {

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                    : "scissors"

            let result = playerOne === computer ?
                "It's a tie!" :
                computer === "paper" && playerOne === "scissors" ?
                    `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                    : computer === "scissors" && playerOne === "rock" ?
                        `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                        : computer === "rock" && playerOne === "paper" ?
                            `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                            : `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`

            alert(result)

            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");

        } else {
            alert("You didn't enter rock, paper, or scissors.");
            location.reload()
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time.");
}