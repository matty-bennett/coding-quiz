// variables for timer
let timerEl = document.getElementById('#countdown');

// function for countdown timer from 75 seconds
function countdown() {
    let timeLeft = 75;

    let timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);

            // function for ending game
        }
    }, 1000);   
}


// start timer when user clicks start quiz button

// start quiz when user clicks start button
const question = document.querySelector("#question");
const choices = Arry.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
let answers = true;
let questionArr = [];
let questionNum = 0;

let questions = [
    {
        question: 'This will be question 1',
        choice1: 'This will be choice 1',
        choice2: 'This will be choice 2',
        choice3: 'This will be choice 3',
        choice4: 'This will be choice 4',
        answer: 1,
    },
    {
        question: 'This will be question 1',
        choice1: 'This will be choice 1',
        choice2: 'This will be choice 2',
        choice3: 'This will be choice 3',
        choice4: 'This will be choice 4',
        answer: 1,
    },
    {
        question: 'This will be question 1',
        choice1: 'This will be choice 1',
        choice2: 'This will be choice 2',
        choice3: 'This will be choice 3',
        choice4: 'This will be choice 4',
        answer: 1,
    },
    {
        question: 'This will be question 1',
        choice1: 'This will be choice 1',
        choice2: 'This will be choice 2',
        choice3: 'This will be choice 3',
        choice4: 'This will be choice 4',
        answer: 1,
    },
    {
        question: 'This will be question 1',
        choice1: 'This will be choice 1',
        choice2: 'This will be choice 2',
        choice3: 'This will be choice 3',
        choice4: 'This will be choice 4',
        answer: 1,
    },
    {
        question: 'This will be question 1',
        choice1: 'This will be choice 1',
        choice2: 'This will be choice 2',
        choice3: 'This will be choice 3',
        choice4: 'This will be choice 4',
        answer: 1,
    }
]

// function for accessing and iterating over question array

// add click events choice questions and function to respond

// function for getting and saving high scores