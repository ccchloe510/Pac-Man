// script.js
const svg = document.querySelector('.maze');

// Define your maze walls using SVG path syntax
const mazeWalls = "M50 50 L350 50 L350 350 L50 350 Z M100 100 L300 100 L300 300 L100 300 Z";

// Set Pac-Man's initial position and path
let pacManX = 75;
let pacManY = 75;
let pacManPathData = `M${pacManX} ${pacManY}`;

function updatePacManPath() {
    pacManPath.setAttribute("d", pacManPathData);
}

// Function to update Pac-Man's position and path based on movement
function movePacMan(dx, dy) {
    pacManX += dx;
    pacManY += dy;
    pacManPathData += ` L${pacManX} ${pacManY}`;
    updatePacManPath();
}

// Handle Pac-Man's movement using arrow keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            movePacMan(0, -10);
            break;
        case "ArrowDown":
            movePacMan(0, 10);
            break;
        case "ArrowLeft":
            movePacMan(-10, 0);
            break;
        case "ArrowRight":
            movePacMan(10, 0);
            break;
    }
});

// Initialize the maze and Pac-Man's path
updatePacManPath();

// Set the maze walls
const mazeWall = document.createElementNS("http://www.w3.org/2000/svg", "path");
mazeWall.setAttribute("d", mazeWalls);
mazeWall.setAttribute("fill", "#555"); // Customize the wall color
svg.appendChild(mazeWall);



// Initialize the game board and render Pac-Man and ghosts
function initializeGame() {
    // Create and render the game board cells
    // Render Pac-Man and ghosts

    // Set up keyboard event listeners for controlling Pac-Man's movement
}

// Update Pac-Man's position and handle collisions
function updateGame() {
    // Update Pac-Man's position based on the direction
    // Handle collisions with walls and dots
    // Update ghost positions
    // Check for collisions between Pac-Man and ghosts
    // Update the score

    // Render the updated game board
}

// Main game loop
function gameLoop() {
    updateGame();
    requestAnimationFrame(gameLoop);
}

// Start the game loop when the page loads
window.onload = function () {
    createGameBoard();
    initializeGame();
    gameLoop();
};

