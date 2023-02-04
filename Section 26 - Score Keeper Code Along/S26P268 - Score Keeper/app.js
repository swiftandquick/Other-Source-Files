// Create two objects, one for each player, inside the objects, create keys to store the elements.  

const p1 = {
    // Scores are initially 0.  
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// Initial winning score is 3.  
let winningScore = 3;

// Initially, the game is not over, so the Boolean value is false.  
let isGameOver = false;

function updateScores(player, opponent) {
    // If the game is not over.  
    if (!isGameOver) {
        // Increment score by 1.  
        player.score = player.score + 1;
        // End the game if the player reaches the winning score.  
        if (player.score === winningScore) {
            isGameOver = true;
            // If player 1 wins, add the winner class to the player's <span> element to make the text green.  
            player.display.classList.add('winner');
            // Also, add the loser class to opponent's <span> element to make the text red.  
            opponent.display.classList.add('loser');
            // Disable the buttons.  
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        // Update the text content of p1Display <span>, unlike innerText, textContent display all text, including invisible text.
        player.display.textContent = player.score;
    }
}

// p1 is passed in as player, p2 as opponent.  
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

// Vice versa.  
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

// Event triggers when the value changes.  
winningScoreSelect.addEventListener('change', function () {
    // Gets the select dropbox's current value, which is a string, then turn it into an integer.  
    winningScore = parseInt(this.value);
    // Invoke reset() on change.  
    reset();
});

// Invoke reset() on click.  
resetButton.addEventListener('click', reset);

// Reset everything to initial state.  
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        // remove() method removes existing class names.  Here, I remove 'winner' and 'loser' classes to un-style the <span> elements.  
        p.display.classList.remove('winner', 'loser');
        // Re-enable the buttons.  
        p.button.disabled = false;
    }
}