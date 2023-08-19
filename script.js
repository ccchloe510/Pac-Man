// script.js
const mazeRows = 24;
const mazeColumns = 24;

const maze = [];

for (let y = 0; y < mazeRows; y++) {
    const row = [];
    for (let x = 0; x < mazeColumns; x++) {
        if (x === 0 || x === mazeColumns - 1 || y === 0 || y === mazeRows - 1) {
            row.push(1);
        } else {
            row.push(Math.random() < 0.7 ? 0 : 1);
        }
    }
    maze.push(row);
}

function generateMaze() {
    const gameContainer = document.querySelector(".game-container");
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement("div");
            cell.className = maze[y][x] === 1 ? "wall" : "path";
            gameContainer.appendChild(cell);
        }
    }
}

generateMaze();

const pacmanSpeed = 25;
const pacman = document.querySelector(".pacman");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        console.log("move up");
        pacman.style.top = `${parseInt(pacman.style.top) - pacmanSpeed}px`;
    } else if (event.key === "ArrowDown") {
        console.log("move down");
        pacman.style.top = `${parseInt(pacman.style.top) + pacmanSpeed}px`;
    } else if (event.key === "ArrowLeft") {
        console.log("move left");
        pacman.style.left = `${parseInt(pacman.style.left) - pacmanSpeed}px`;
    } else if (event.key === "ArrowRight") {
        console.log("move right");
        pacman.style.left = `${parseInt(pacman.style.left) + pacmanSpeed}px`;
    }
});










