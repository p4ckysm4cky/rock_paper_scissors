function computerSelection() {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = [Math.floor(Math.random()*options.length)];
    return options[randomIndex];
}


function playerSelection() {
    const options = ["rock", "paper", "scissors"];
    while (true) {
        result = window.prompt("Paper ~ Scissors ~ Rock: ").toLowerCase();
        if (options.includes(result)) {
            return result;
        }
    }
}


function game() {
    let playerInput = playerSelection();
    let computerInput = computerSelection();
    if (playerInput === computerInput) {
        console.log("Tie!")
        return 0
    } else if (playerInput === "rock") {
        if (computerInput === "scissors") {
            console.log("Rock smashes scissors! You win!");
            return 1
        } else {
            console.log("Paper covers rock! You lose.");
            return -1
        }
    } else if (playerInput === "paper") {
        if (computerInput === "rock") {
            console.log("Paper covers rock! You win!");
            return 1
        } else {
            console.log("Scissors cuts paper! You lose.");
            return -1
        }
    } else {
        if (computerInput === "paper") {
            console.log("Scissors cuts paper! You win!");
            return 1
        } else {
            console.log("Rock smashes scissors! You lose.");
            return -1
        }
    }
}


function main() {
    let i = 1;
    let scorePlayer = 0;
    let scoreComputer = 0;
    while (i < 5 + 1) {
        console.log(`Player score: ${scorePlayer}`);
        console.log(`Computer score: ${scoreComputer}`);
        let result = game()
        if (result === 1) {
            scorePlayer++;
        } else if (result === -1){
            scoreComputer++;
        }
        i++
    }
}

main()