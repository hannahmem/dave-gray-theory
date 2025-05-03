// Interactive game

let playGame = confirm("Shall we play rock, scissors, paper?");
if (playGame) {
    // play
    while (playGame) {
        const playerChoice = prompt("Please enter rock, scissors, or paper.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLocaleLowerCase();

            if (playerOne === "rock"
                || playerOne === "paper"
                || playerOne === "scissors"
            ) {

                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "scissors", "paper"];
                const computer = rpsArray[computerChoice];

                const result = playerOne === computer ?
                    "It's a tie!" :
                    computer === "paper" && playerOne === "scissors" ?
                        `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                        : computer === "scissors" && playerOne === "rock" ?
                            `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                            : computer === "rock" && playerOne === "paper" ?
                                `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
                                : `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`

                alert(result)

                playGame = confirm("Play again?");
                if (!playGame) alert("Ok, thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper, or scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind. Maybe next time.");
            break;
        }
    }
} else {
    alert("Ok, maybe next time.");
}