console.log("Hello World!")

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    if (computerChoice === 1) {
        return("rock")
    } else if (computerChoice === 2) {
        return("paper")        
    } else {
        return("scissors")
    }
}
//console.log(getComputerChoice())

function getHumanChoice(){
    let input = prompt("Rock, Paper, Scissors","Shoot!");
    let humanChoice = input.toLowerCase();
    return(humanChoice);
}
//console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(myChoice, compChoice){
    myChoice = getHumanChoice();
    compChoice = getComputerChoice();
    if (myChoice === "rock" && compChoice === "scissors") {
        humanScore++
        return(`You win! Rock beats scissors! You have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice == "scissors" && compChoice === "paper") {
        humanScore++
        return(`You win! Scissors beats paper! You have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "paper" && compChoice == "rock") {
        humanScore++
        return(`You win! Paper beats rock! You have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "rock" && compChoice === "paper"){
        computerScore++
        return(`You lose! Paper beats rock! you have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "paper" && compChoice === "scissors"){
        computerScore++
        return(`You lose! Scissors beats paper! you have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "scissors" && compChoice === "rock"){
        computerScore++
        return(`You lose! Rock beats scissors! you have ${humanScore} wins and ${computerScore} losses.`)
    }
}
console.log(playRound())
