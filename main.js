console.log("Hello World!")

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1)
    if (computerChoice === 1) {
        return("rock")
    } else if (computerChoice === 2) {
        return("paper")        
    } else {
        return("scissors")
    }
}
console.log(getComputerChoice())
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors","Shoot!")
    return(humanChoice)
}
console.log(getHumanChoice())