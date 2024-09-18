let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");

const computerchoice = () => {
    let option = ["rock", "paper", "scissor"];
    const rndind = Math.floor(Math.random() * 3);  
    return option[rndind];
};

const drawgame = () => {
    msg.innerText = "It's a Draw!";
};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userscorep.innerText = userScore;
    } else {
        msg.innerText = `You Lose! Computer's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compscorep.innerText = compScore;
    }
};

const playgame = (userchoice) => {
    const compchoice = computerchoice();

    if (userchoice === compchoice) {
        drawgame(); 
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});






















































































































// Initialize user and computer scores
// let userScore = 0;
// let compScore = 0;

// // Get references to choice elements, message display, and score elements
// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const userscorep = document.querySelector("#user-score");
// const compscorep = document.querySelector("#comp-score");

// // Function to generate a random choice for the computer
// const computerchoice = () => {
//     const option = ["rock", "paper", "scissor"];
//     const rndind = Math.floor(Math.random() * 3);  // Random index between 0 and 2
//     return option[rndind];  // Return random choice
// };

// // Function to handle a draw situation
// const drawgame = () => {
//     msg.innerText = "It's a Draw!";  // Display draw message
// };

// // Function to display the winner and update scores
// const showWinner = (userwin, userchoice, compchoice) => {
//     if (userwin) {
//         // User wins
//         msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
//         msg.style.backgroundColor = "green";  // Set message background to green
//         userScore++;  // Increment user's score
//         userscorep.innerText = userScore;  // Update user's score on the screen
//     } else {
//         // Computer wins
//         msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
//         msg.style.backgroundColor = "red";  // Set message background to red
//         compScore++;  // Increment computer's score
//         compscorep.innerText = compScore;  // Update computer's score on the screen
//     }
// };

// // Main function to handle game logic
// const playgame = (userchoice) => {
//     const compchoice = computerchoice();  // Get computer's choice

//     if (userchoice === compchoice) {
//         // It's a draw
//         drawgame();
//     } else {
//         // Determine if the user wins or loses
//         let userwin = true;
//         if (userchoice === "rock") {
//             userwin = compchoice === "paper" ? false : true;  // Rock loses to paper
//         } else if (userchoice === "paper") {
//             userwin = compchoice === "scissor" ? false : true;  // Paper loses to scissor
//         } else {
//             userwin = compchoice === "rock" ? false : true;  // Scissor loses to rock
//         }

//         // Display the result and update scores
//         showWinner(userwin, userchoice, compchoice);
//     }
// };

// // Add event listeners to each choice button (rock, paper, scissor)
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userchoice = choice.getAttribute("id");  // Get user's choice
//         console.log("clicked", userchoice);
//         playgame(userchoice);  // Play the game with the user's choice
//     });
// });
