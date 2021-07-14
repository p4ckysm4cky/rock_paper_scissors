function computerSelection() {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = [Math.floor(Math.random()*options.length)];
    return options[randomIndex];
}


function playerSelection() {     
    const rockBtn = document.getElementById("rock-btn");
    const paperBtn = document.getElementById("paper-btn");
    const scissorsBtn = document.getElementById("scissors-btn");
    rockBtn.addEventListener("click", function(e) {
        console.log("rock");
        game("rock");
    })
    paperBtn.addEventListener("click", function(e) {
        console.log("paper");
        game("paper")
    })
    scissorsBtn.addEventListener("click", function(e) {
        console.log("scissors");
        game("scissors")
    })
}


function game(playerInput) {
    let computerInput = computerSelection();
    const resultText = document.getElementById("result-text");
    if (! roundEnded) {
        if (playerInput === computerInput) {
            console.log("Tie!")
            resultText.innerHTML = "Tie!"
            change_score("tie")
        } else if (playerInput === "rock") {
            if (computerInput === "scissors") {
                console.log("Rock smashes scissors! You win!");
                resultText.innerHTML = "Rock smashes scissors! You win!"
                change_score("win")
            } else {
                console.log("Paper covers rock! You lose.");
                resultText.innerHTML = "Paper covers rock! You lose.";
                change_score("lose")
            }
        } else if (playerInput === "paper") {
            if (computerInput === "rock") {
                console.log("Paper covers rock! You win!");
                resultText.innerHTML = "Paper covers rock! You win!";
                change_score("win")
            } else {
                console.log("Scissors cuts paper! You lose.");
                resultText.innerHTML = "Scissors cuts paper! You lose."
                change_score("lose")
            }
        } else {
            if (computerInput === "paper") {
                console.log("Scissors cuts paper! You win!");
                resultText.innerHTML = "Scissors cuts paper! You win!"
                change_score("win")
            } else {
                console.log("Rock smashes scissors! You lose.");
                resultText.innerHTML = "Rock smashes scissors! You lose."
                change_score("lose")
            }
        }
    }
    if (playerScore === 5) {
        endScreen("win");
    } else if (computerScore === 5) {
        endScreen("lose");
    }
}
function change_score(result) {
    const scoreBoard = document.getElementById("score-board");
    switch (result) {
        case "win":
            console.log("Increment playerScore");
            playerScore ++;
            break;
        case "lose":
            console.log("Increment computerScore");
            computerScore ++;
            break;
        case "tie":
            console.log("Don't increment any score");
            break;
        default:
            console.log("Unknown result");
            break;

    }
    scoreBoard.innerHTML = `${playerScore} - ${computerScore}`
}

function endScreen(result) {
    const resultText = document.getElementById("result-text");
    switch (result) {
        case "win":
            resultText.innerHTML = "Congragulations you managed to beat CPU!";
            break; 
        case "lose":
            resultText.innerHTML = "Oh no CPU beat you!";
            break;        
    }
    roundEnded = true;
        
}





let playerScore = 0;
let computerScore = 0;
let roundEnded = false;
playerSelection();
