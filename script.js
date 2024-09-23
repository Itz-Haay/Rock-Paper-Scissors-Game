const buttons = document.querySelectorAll('button');
var playerResult = document.getElementById("playerChoice");
var compResult = document.getElementById("computerChoice");
var gameResult = document.getElementById("result");
var userPoints = document.getElementById("user-score");
var userScore = parseInt(userPoints.innerHTML);
var compPoints = document.getElementById("comp-score");
var compScore = parseInt(compPoints.innerHTML);

let isGameRunning = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(isGameRunning) return;
        isGameRunning = true;
        var compChoice = computerChoice();
        setTimeout(() => {
            playerResult.textContent = "You Chose: " + button.id;
        }, 100);

        setTimeout(() => {
            compResult.innerHTML = "The Computer Chose: " + compChoice;
        }, 300);

        setTimeout(() => {
            gameResult.innerHTML = playRound(button.id, compChoice);
        }, 1500);
    });
});

function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
};

function playRound(playerOption, computerOption) {
    if (playerOption === computerOption) {
        return "Result: It is a Tie, You Both Picked " + playerOption + "!";
    } else if (
        (playerOption === "Rock" &&
            computerOption === "Scissors"
        ) ||
        (playerOption === "Paper" &&
            computerOption === "Rock"
        ) ||
        (playerOption === "Scissors" &&
            computerOption === "Paper"
        )
    ) {
        userScore = userScore + 1;
        userPoints.innerHTML = userScore;
        return "Result: You Win! " + playerOption + " beats " + computerOption;
    } else {
        compScore = compScore + 1;
        compPoints.innerHTML = compScore;
        return "Result: You Lose, " + computerOption + " beats " + playerOption + ", Better Luck Next Time!";
    }
};

function resetGame() {
    isGameRunning = false;
    playerResult.textContent = "You Chose: ";
    compResult.innerHTML = "The Computer Chose: ";
    gameResult.innerHTML = "Result: ";
}

function newGame() {
    isGameRunning = false;
    playerResult.textContent = "You Chose: ";
    compResult.innerHTML = "The Computer Chose: ";
    gameResult.innerHTML = "Result: ";
    userScore = 0;
    userPoints.innerHTML = userScore;
    compScore = 0;
    compPoints.innerHTML = compScore;
}