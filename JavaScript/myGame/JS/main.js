let guessGame = confirm("Do you want to play a guess game?");

if (guessGame) {
    let getPrompt = prompt("Can you guess the number I am thinking from 1 to 5?")
    if (getPrompt) {
        let playerChoice = Number(getPrompt)
        if (playerChoice > 0 && playerChoice < 6) {
            let randomNumber = Math.floor(Math.random() * 5 + 1)
            if (playerChoice === randomNumber) {
                alert("Great job! You got it!")
            } else {
                let tryAgain = confirm(`Sorry, you chose ${playerChoice}, but the number was ${randomNumber}. Try again?`)
                tryAgain ? location.reload() : alert("See you again!")
            }
        } else {
            alert("Please choose a number from 0 to 10.")
            location.reload()
        }
    } else {
        alert("Okay, we can play next time!")
    }
} else {
    alert("That's okay. See you next time! :)")
}