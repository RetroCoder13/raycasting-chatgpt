const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const tileSize = 10;
const colors = {
  0: "#fff",
  1: "#000"
};

forward = false;
backward = false;
left = false;
right = false;

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyW") {
    // Move forward
    forward = true;
    }
    if (event.code === "KeyS") {
    // Move backward
    backward = true;
    }
    if (event.code === "KeyA") {
    // Turn left
    left = true;
    }
    if (event.code === "KeyD") {
    // Turn right
    right = true;
    }
});
document.addEventListener("keyup", function(event) {
    if (event.code === "KeyW") {
    // Move forward
    forward = false;
    }
    if (event.code === "KeyS") {
    // Move backward
    backward = false;
    }
    if (event.code === "KeyA") {
    // Turn left
    left = false;
    }
    if (event.code === "KeyD") {
    // Turn right
    right = false;
    }
});

// Define the scene as a 2D array of tiles
// const scene = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
//     [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

const scene = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
  

// Loop through the scene and draw each tile
for (let y = 0; y < scene.length; y++) {
  for (let x = 0; x < scene[y].length; x++) {
    ctx.fillStyle = colors[scene[y][x]];
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
}


// Define the grid size
const GRID_SIZE = 500;

// Define the canvas size
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

// Define player constants
let playerX = 1.5;
let playerY = 1.5;
let playerDir = Math.PI / 4;

const MOVE_SPEED = 0.05;
const ROT_SPEED = 0.015;


// Define stripe width
const STRIPE_WIDTH = CANVAS_WIDTH / GRID_SIZE;

// Define the maximum distance the ray can travel
const MAX_DISTANCE = 100;

// Define the height of the stripes to be rendered on the screen
const STRIPE_HEIGHT = 250;

function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < GRID_SIZE; i++) {
        // Calculate the angle of the current stripe
        const angle = playerDir - Math.PI / 6 + i * Math.PI / 3 / GRID_SIZE;
    
        // Cast a ray from the player's position in the direction of the current stripe
        let x = playerX;
        let y = playerY;
        let dx = Math.cos(angle);
        let dy = Math.sin(angle);
        let distance = 0;
    
        while (distance < MAX_DISTANCE) {
        distance += 0.1;
        x += dx * 0.1;
        y += dy * 0.1;
    
        // Check if the ray has hit a wall
        if (scene[Math.floor(y)][Math.floor(x)] > 0) {
            break;
        }
        }
    
        // Calculate the height of the wall based on its distance from the player
        const wallHeight = STRIPE_HEIGHT / distance;
    
        // Draw the stripe on the screen
        ctx.fillStyle = "#333";
        ctx.fillRect(i * STRIPE_WIDTH, (CANVAS_HEIGHT - wallHeight) / 2, STRIPE_WIDTH, wallHeight);
    }

    if (forward) {
        // Move forward
        playerX += Math.cos(playerDir) * MOVE_SPEED;
        playerY += Math.sin(playerDir) * MOVE_SPEED;
    }
    if (backward) {
        // Move backward
        playerX -= Math.cos(playerDir) * MOVE_SPEED;
        playerY -= Math.sin(playerDir) * MOVE_SPEED;
    }
    if (left) {
        // Turn left
        playerDir -= ROT_SPEED;
    }
    if (right) {
        // Turn right
        playerDir += ROT_SPEED;
    }

    for (let y = 0; y < scene.length; y++) {
        for (let x = 0; x < scene[y].length; x++) {
          ctx.fillStyle = colors[scene[y][x]];
          ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    // Draw the player on the screen
    ctx.fillStyle = "#f00";
    ctx.fillRect(playerX * tileSize - tileSize / 2, playerY * tileSize - tileSize / 2, tileSize, tileSize);
}

setInterval(loop,1000/60)