    function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    if (computerChoice === 1) {
        return("rock")
    } else if (computerChoice === 2) {
        return("paper")        
    } else {
        return("scissors")
    }}
    
    let rockBttn = document.querySelector(".rock-bttn")
    let paperBttn = document.querySelector(".paper-bttn")
    let scissorBttn = document.querySelector(".scissors-bttn")
    let button = document.querySelector("button")
    let humanScore = document.querySelector(".my-score")
    let computerScore = document.querySelector(".computer-score")
    let myChoiceImg = document.querySelector(".my-choice-img")
    let compChoiceImg = document.querySelector(".computer-choice-img")
    let firstFive = document.querySelector(".first-five")
    let roundStatus = document.querySelector(".status")

    let humanChoice = ""

    rockBttn.addEventListener("click", (e) => {
        humanChoice = "rock"
    })
    rockBttn.addEventListener("click", getComputerChoice)
    rockBttn.addEventListener("click", playRound)
    rockBttn.addEventListener("click", checkScore)

    paperBttn.addEventListener("click", (e) => {
        humanChoice = "paper"
    })
    paperBttn.addEventListener("click", getComputerChoice)
    paperBttn.addEventListener("click", playRound)
    paperBttn.addEventListener("click", checkScore)

    scissorBttn.addEventListener("click", (e) => {
        humanChoice = "scissors"
    })
    scissorBttn.addEventListener("click", getComputerChoice)
    scissorBttn.addEventListener("click", playRound)
    scissorBttn.addEventListener("click", checkScore)
    
    humanScore.textContent = 0
    computerScore.textContent = 0;

    function playRound(myChoice, compChoice){
    myChoice = humanChoice;
    compChoice = getComputerChoice();

    if (myChoice === "rock" && compChoice === "scissors") {
        humanScore.textContent++
        myChoiceImg.src = "images/rock.png"
        compChoiceImg.src = "images/scissors.png"
        roundStatus.textContent = "--"
    } else if (myChoice == "scissors" && compChoice === "paper") {
        humanScore.textContent++
        myChoiceImg.src = "images/scissors.png"
        compChoiceImg.src = "images/paper.png"
        roundStatus.textContent = "--"
    } else if (myChoice === "paper" && compChoice == "rock") {
        humanScore.textContent++
        myChoiceImg.src = "images/paper.png"
        compChoiceImg.src = "images/rock.png"
        roundStatus.textContent = "--"
    } else if (myChoice === "rock" && compChoice === "paper"){
        computerScore.textContent++
        myChoiceImg.src = "images/rock.png"
        compChoiceImg.src = "images/paper.png"
        roundStatus.textContent = "--"
    } else if (myChoice === "paper" && compChoice === "scissors"){
        computerScore.textContent++
        myChoiceImg.src = "images/paper.png"
        compChoiceImg.src = "images/scissors.png"
        roundStatus.textContent = "--"
    } else if (myChoice === "scissors" && compChoice === "rock"){
        computerScore.textContent++
        myChoiceImg.src = "images/scissors.png"
        compChoiceImg.src = "images/rock.png"
        roundStatus.textContent = "--"
    } else if (myChoice === "rock" && compChoice === "rock"){
        roundStatus.textContent = "Draw!"
        myChoiceImg.src = "images/rock.png"
        compChoiceImg.src = "images/rock.png"
    } else if (myChoice === "paper" && compChoice === "paper"){
        roundStatus.textContent = "Draw!"
        myChoiceImg.src = "images/paper.png"
        compChoiceImg.src = "images/paper.png"
    } else if(myChoice === "scissors" && compChoice === "paper"){
        roundStatus.textContent = "Draw!"
        myChoiceImg.src = "images/scissors.png"
        compChoiceImg.src = "images/scissors.png"
    }}

function checkScore (){
    if (Number(humanScore.textContent) === 5) {
        roundStatus.textContent = "You win! Refresh to play again"

        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorBttn.disabled = true;
    } else if (Number(computerScore.textContent) === 5){
    roundStatus.textContent = "You lose! Refresh to play again"

        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorBttn.disabled = true;
} else {
    
}}

