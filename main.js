window.onload = e => {
    console.log("All has been loaded properly.")
};


// console.log("Console log running ....");

// let game = [
//     'Rock',
//     'Scissors',
//     'Paper'
// ];

// window.onload = playGame;

// function playGame(){
//     let humanScore = 0, computerScore = 0;

//     for (let i = 1; i <= 5; i++) {

//         console.log(`Round ${i}`)
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
    
//         playRound(humanSelection, computerSelection);

//         console.log(`Current Score is : You --> ${humanScore} || ${computerScore} <-- Computer.`)
//     }

//     if (humanScore > computerScore) {
//         console.log(`Congrats !!! You won with ${humanScore} - ${computerScore} `);
//     }else if (humanScore < computerScore){
//         console.log(`Ohh No !!! You lost. You got ${humanScore} - ${computerScore}`);
//     }else {
//         console.log(`You tied. Try again both got ${humanScore} - ${computerScore}`);
//     }

//     function playRound(humanChoice, computerChoice) {
//         let output = "You ";
    
//         switch (humanChoice) {
//             case 'Rock':
//                 if (computerChoice == 'Scissors') {
//                     output += `won - ${game[0]} beats ${game[1]}`;
//                     humanScore++;
//                 } else if (computerChoice == 'Paper') {
//                     output += `lose - ${game[2]} beats ${game[0]}`;
//                     computerScore++;
//                 } else {
//                     output += `tied !!! Both choose ${computerChoice}`;
//                 }
//                 break;
//             case 'Scissors':
//                 if (computerChoice == 'Paper') {
//                     output += `won - ${game[1]} beats ${game[2]}`;
//                     humanScore++;
//                 } else if (computerChoice == 'Rock') {
//                     output += `lose - ${game[0]} beats ${game[1]}`;
//                     computerScore++;
//                 } else {
//                     output += `tied !!! Both choose ${computerChoice}`;
//                 }
//                 break;
//             case 'Paper':
//                 if (computerChoice == 'Rock') {
//                     output += `won - ${game[2]} beats ${game[0]}`;
//                     humanScore++;
//                 } else if (computerChoice == 'Scissors') {
//                     output += `lose - ${game[1]} beats ${game[2]}`;
//                     computerScore++;
//                 } else {
//                     output += `tied !!! Both choose ${computerChoice}`;
//                 }
//                 break;
//             default:
//                 output += `Hmmm`;
//         }
//         console.log(output); 
//     }
// }



// function getComputerChoice() {
//     // 0 - Rock, 1 - Scissors, 2 - Paper
//     choice = game[Math.floor(Math.random() * 3)]
//     console.log(`Computer choose ${choice}.`);

//     return choice;
// }


// function getHumanChoice() {
//     let option;
//     let choice = prompt(`\u{1F601}Welcome to Rock Paper Scissors !!!\u{1F601} \nEnter your choice : \nRock(1)\u{1F91B}, Scissors(2)\u{270C}, Paper(3)\u{1F91A}.`).toLowerCase();

//     // Sanitize user input
//     if (choice == "rock" || +choice == 1) {
//         option = game[0];
//     } else if (choice == "scissors" || +choice == 2) {
//         option = game[1];
//     } else if (choice == "paper" || +choice == 3) {
//         option = game[2];
//     } else {
//         option = "INVALID";
//     }

//     console.log(`Human choose ${option}.`);
//     return option;
// }
