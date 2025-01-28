console.log("Console log running ....");

let game = [
    'Rock',
    'Scissors',
    'Paper'
];
let humanScore = 0, computerScore = 0;

const title = document.querySelector1("h4");
const computer = document.createElement("p");
const human = document.createElement("p");


for (let i = 1; i <= 5; i++) {
    title.textContent = `Round ${i}`
    document.body.appendChild(title);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    computer.textContent = `Computer choose ${computerSelection}`;
    human.textContent = `You choose ${humanSelection}`;

    // computer.textContent = choice;
    document.body.appendChild(computer);
    document.body.appendChild(human);

    playRound(humanSelection, computerSelection);
}

function playRound(humanChoice, computerChoice) {
    let output = "You ";

    switch (humanChoice) {
        case 'Rock':
            if (computerChoice == 'Scissors') {
                output += `won - ${game[0]} beats ${game[1]}`;
            } else if (computerChoice == 'Paper') {
                output += `lose - ${game[2]} beats ${game[0]}`;
            } else {
                output += `tied !!! Both choose ${computerChoice}`;
            }
            break;
        case 'Scissors':
            if (computerChoice == 'Paper') {
                output += `won - ${game[1]} beats ${game[2]}`;
            } else if (computerChoice == 'Rock') {
                output += `lose - ${game[0]} beats ${game[1]}`;
            } else {
                output += `tied !!! Both choose ${computerChoice}`;
            }
            break;
        case 'Paper':
            if (computerChoice == 'Rock') {
                output += `won - ${game[2]} beats ${game[0]}`;
            } else if (computerChoice == 'Scissors') {
                output += `lose - ${game[1]} beats ${game[2]}`;
            } else {
                output += `tied !!! Both choose ${computerChoice}`;
            }
            break;
        default:
            output += `Hmmm`;
    }
    console.log(output); 
}

function getComputerChoice() {
    // 0 - Rock, 1 - Scissors, 2 - Paper
    choice = game[Math.floor(Math.random() * 3)]
    console.log(`Computer choose ${choice}.`);

    return choice;
}


function getHumanChoice() {
    let option;
    let choice = prompt(`\u{1F601}Welcome to Rock Paper Scissors !!!\u{1F601} \nEnter your choice : \nRock(1)\u{1F91B}, Scissors(2)\u{270C}, Paper(3)\u{1F91A}.`).toLowerCase();

    // Sanitize user input
    if (choice == "rock" || +choice == 1) {
        option = game[0];
    } else if (choice == "scissors" || +choice == 2) {
        option = game[1];
    } else if (choice == "paper" || +choice == 3) {
        option = game[2];
    } else {
        option = "INVALID";
    }

    console.log(`Human choose ${option}.`);
    return option;
}
