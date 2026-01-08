    function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    if (computerChoice === 1) {
        return("rock")
    } else if (computerChoice === 2) {
        return("paper")        
    } else {
        return("scissors")
    }}

    function getHumanChoice(){
    let input = prompt("Rock, Paper, Scissors","Shoot!");
    let humanChoice = input.toLowerCase();
    return(humanChoice);
    }
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(myChoice, compChoice){
    myChoice = getHumanChoice();
    compChoice = getComputerChoice();

    if (myChoice === "rock" && compChoice === "scissors") {
        humanScore++
        return(`You win this round! Rock beats scissors! You have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice == "scissors" && compChoice === "paper") {
        humanScore++
        return(`You win this round! Scissors beats paper! You have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "paper" && compChoice == "rock") {
        humanScore++
        return(`You win this round! Paper beats rock! You have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "rock" && compChoice === "paper"){
        computerScore++
        return(`You lose this round! Paper beats rock! you have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "paper" && compChoice === "scissors"){
        computerScore++
        return(`You lose this round! Scissors beats paper! you have ${humanScore} wins and ${computerScore} losses.`)
    } else if (myChoice === "scissors" && compChoice === "rock"){
        computerScore++
        return(`You lose this round! Rock beats scissors! you have ${humanScore} wins and ${computerScore} losses.`)
    } else {
        return(`Draw! the score remains ${humanScore} to ${computerScore}.`)
    }
    }

function playGame(){
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    if (humanScore > computerScore) {
        return("You win! Refresh the page to play again!")
    } else if (humanScore < computerScore) {
        return("You lose! Refresh the page to try again!")
    } else {
        return("It's a tie! refresh the page to play again!")
    }

}
console.log(playGame())