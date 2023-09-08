document.addEventListener("DOMContentLoaded", () => {
    const pacMan = document.getElementById("pac-man");
    const ghosts = document.querySelectorAll(".ghost");
    const scoreValue = document.getElementById("score-value");
    const foodElements = document.querySelectorAll(".food");
    const gameContainer = document.getElementById("game-container");
    const gameOverModal = document.getElementById("game-over-modal");
    const finalScore = document.getElementById("final-score");
    const modalClose = document.querySelector(".close");
    const restartButton = document.getElementById("restart-button");

    let score = 0;
    let gameOver = false;

    // Function to update the score
    function updateScore() {
        score += 10; // Increment the score by 10 points when Pac-Man collects food
        scoreValue.textContent = score;
    }

    // Function to check for collisions with food
    function checkFoodCollision() {
        const pacManRect = pacMan.getBoundingClientRect();

        foodElements.forEach((food) => {
            const foodRect = food.getBoundingClientRect();

            if (
                pacManRect.left < foodRect.right &&
                pacManRect.right > foodRect.left &&
                pacManRect.top < foodRect.bottom &&
                pacManRect.bottom > foodRect.top
            ) {
                // Pac-Man collected food, increase the score
                updateScore();
                // Remove the collected food element from the DOM
                food.parentNode.removeChild(food);
            }
        });
    }

    // Function to check for collisions with ghosts
    function checkGhostCollision() {
        if (gameOver) return; // If game over, don't check for collisions

        const pacManRect = pacMan.getBoundingClientRect();

        ghosts.forEach((ghost) => {
            const ghostRect = ghost.getBoundingClientRect();
            
            if (
                pacManRect.left < ghostRect.right &&
                pacManRect.right > ghostRect.left &&
                pacManRect.top < ghostRect.bottom &&
                pacManRect.bottom > ghostRect.top
            ) {
                // Collision detected with a ghost, trigger game over
                gameOver = true;
                finalScore.textContent = score;
                gameOverModal.style.display = "block"; // Show the game over modal
            }
        });
    }

    // Move Pac-Man
    document.addEventListener("keydown", (e) => {
        if (gameOver) return; // If game over, don't move Pac-Man

        const pacManRect = pacMan.getBoundingClientRect();

        if (e.key === "ArrowRight") {
            pacMan.style.transform = "rotate(0deg)";
            pacMan.style.left = parseInt(pacMan.style.left || 0) + 40 + "px";
            checkFoodCollision(); // Check for collisions with food
            checkGhostCollision(); // Check for collisions with ghosts
        } else if (e.key === "ArrowLeft") {
            pacMan.style.transform = "rotate(180deg)";
            pacMan.style.left = parseInt(pacMan.style.left || 0) - 40 + "px";
            checkFoodCollision(); // Check for collisions with food
            checkGhostCollision(); // Check for collisions with ghosts
        } else if (e.key === "ArrowUp") {
            pacMan.style.transform = "rotate(-90deg)";
            pacMan.style.top = parseInt(pacMan.style.top || 0) - 40 + "px";
            checkFoodCollision(); // Check for collisions with food
            checkGhostCollision(); // Check for collisions with ghosts
        } else if (e.key === "ArrowDown") {
            pacMan.style.transform = "rotate(90deg)";
            pacMan.style.top = parseInt(pacMan.style.top || 0) + 40 + "px";
            checkFoodCollision(); // Check for collisions with food
            checkGhostCollision(); // Check for collisions with ghosts
        }
    });

    // Close the game over modal
    modalClose.addEventListener("click", () => {
        gameOverModal.style.display = "none";
    });

    // Restart the game when the restart button is clicked
    restartButton.addEventListener("click", () => {
        location.reload(); // Refresh the page to start a new round
    });
});


















