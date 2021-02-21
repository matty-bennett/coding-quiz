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
