const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const tileSize = 10;
const colors = {
  'player': "#5555AA",
  0: "#FFFFFF",
  1: "#333333",
  2: "#FF0000"
};

const mapSelect = document.getElementById('map-select');
let selectedMap = mapSelect.value;

mapSelect.addEventListener('change', function() {
  selectedMap = mapSelect.value;
  // Load the selected map
  if(selectedMap == "map1"){
    scene = [
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
  } else if(selectedMap == "map2"){
    scene = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  } else if(selectedMap == "map3"){
    scene = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  }
});

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

var scene = [
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
          distance += 0.001;
          x += dx * 0.001;
          y += dy * 0.001;
    
          // Check if the ray has hit a wall
          if (scene[Math.floor(y)][Math.floor(x)] > 0) {
              break;
          }
        }
    
        // Calculate the height of the wall based on its distance from the player
        const wallHeight = STRIPE_HEIGHT / distance;
    
        // Draw the stripe on the screen
        // ctx.fillStyle = "#333";

        hslColor = hexToHsl(colors[scene[Math.floor(y)][Math.floor(x)]])
        // if(distance>3){
          // changeBrightness = hslColor[2]*((distance-2)/4)
          changeBrightness = hslColor[2]*((distance+1)/4)
          if(changeBrightness>hslColor[2]){
            hslColor[2] = changeBrightness
          }
        // }
        newColor = hslToHex(hslColor)

        if(newColor.length>7){
          newColor = "#FFFFFF"
        }

        ctx.fillStyle = newColor
        
        ctx.fillRect(i * STRIPE_WIDTH, (CANVAS_HEIGHT - wallHeight) / 2, STRIPE_WIDTH, wallHeight);
    }

    movePlayer()

    for (let y = 0; y < scene.length; y++) {
        for (let x = 0; x < scene[y].length; x++) {
          ctx.fillStyle = colors[scene[y][x]];
          ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    // Draw the player on the screen
    ctx.fillStyle = colors['player'];
    ctx.fillRect(playerX * tileSize - tileSize / 2, playerY * tileSize - tileSize / 2, tileSize, tileSize);
}

function movePlayer() {
  // const moveStep = MOVE_SPEED * deltaTime;
  // const rotStep = ROT_SPEED * deltaTime;
  const moveStep = MOVE_SPEED;
  const rotStep = ROT_SPEED;

  if (left) {
    playerDir -= rotStep;
  }
  if (right) {
    playerDir += rotStep;
  }
  if (forward) {
    // check for forward movement collision
    const nextX = playerX + Math.cos(playerDir) * moveStep;
    const nextY = playerY + Math.sin(playerDir) * moveStep;
    if (isBlocking(nextX, nextY)) {
      return; // do not move if there's a collision
    }

    playerX = nextX;
    playerY = nextY;
  }

  if (backward) {
    // check for backward movement collision
    const nextX = playerX - Math.cos(playerDir) * moveStep;
    const nextY = playerY - Math.sin(playerDir) * moveStep;
    if (isBlocking(nextX, nextY)) {
      return; // do not move if there's a collision
    }

    playerX = nextX;
    playerY = nextY;
  }
}

function isBlocking(x, y) {
  // check if the player's next position collides with a wall
  const mapX = Math.floor(x);
  const mapY = Math.floor(y);
  if (scene[mapY][mapX] === 1) {
    return true;
  }
  return false;
}

function hexToHsl(hex) {
  // Convert HEX to RGB
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  // Convert RGB to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b);
  let cmax = Math.max(r,g,b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;

  if (delta === 0) {
    s = 0;
  } else {
    s = delta / (1 - Math.abs(2 * l - 1));
  }

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h,s,l];
}

function hslToHex(hsl) {
  let [h, s, l] = hsl;
  s = s / 100;
  l = l / 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r, g, b;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255).toString(16).padStart(2, "0");
  g = Math.round((g + m) * 255).toString(16).padStart(2, "0");
  b = Math.round((b + m) * 255).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

setInterval(loop,1000/60)