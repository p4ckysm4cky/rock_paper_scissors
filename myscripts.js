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
console.log(playerSelection())