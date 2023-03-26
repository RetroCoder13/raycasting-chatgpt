// map grid
const map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
];

// canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// player
const player = {
    x: 1.5,
    y: 1.5,
    angle: 0,
    fov: Math.PI / 4
};

// key bindings
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
};

document.addEventListener("keydown", (event) => {
    switch(event.code) {
        case "KeyW":
            keys.w = true;
            break;
        case "KeyA":
            keys.a = true;
            break;
        case "KeyS":
            keys.s = true;
            break;
        case "KeyD":
            keys.d = true;
            break;
    }
});

document.addEventListener("keyup", (event) => {
    switch(event.code) {
        case "KeyW":
            keys.w = false;
            break;
        case "KeyA":
            keys.a = false;
            break;
        case "KeyS":
            keys.s = false;
            break;
        case "KeyD":
            keys.d = false;
            break;
    }
});

// game loop
function loop() {
    // move player
    if (keys.w) {
        player.x += Math.cos(player.angle) * 0.1;
        player.y += Math.sin(player.angle) * 0.1;
    }
    if (keys.a) {
        player.angle -= 0.1;
    }
    if (keys.s) {
        player.x -= Math.cos(player.angle) * 0.1;
        player.y -= Math.sin(player.angle) * 0.1;
    }
    if (keys.d) {
        player.angle += 0.1;
    }

    // clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw walls
    for (let i = 0; i < canvas.width; i++) {
        const angle = player.angle - player.fov / 2 + player.fov * i / canvas.width;

        for (let j = 0; j < canvas.height; j++) {
            const distanceToWall = castRay(player.x, player.y, angle);

            // draw wall slice
            const wallHeight = canvas.height / distanceToWall;
            const wallTop = canvas.height / 2 - wallHeight / 2;
            const wallBottom = canvas.height / 2 + wallHeight / 2;

            ctx.fillStyle = "gray";
            ctx.fillRect(i, wallTop, 1, wallHeight);

            // draw floor and ceiling
            const ceilingHeight = canvas.height / 2 - wallHeight / 2;
            const floorTop = canvas.height / 2 + wallHeight / 2;
            const floorHeight = canvas.height / distanceToWall;

            ctx.fillStyle = "black";
            ctx.fillRect(i, 0, 1, ceilingHeight);

            ctx.fillStyle = "brown";
            ctx.fillRect(i, floorTop, 1, floorHeight);
        }
    }

    ctx.fillRect(player.x*10,player.y*10,10,10)

    // requestAnimationFrame(loop);
}

function castRay(x, y, angle) {
    let distanceToWall = 0;
    let hitWall = false;
    while (!hitWall && distanceToWall < 10) {
        const mapX = Math.floor(x);
        const mapY = Math.floor(y);

        // calculate distance to next x or y grid line
        let deltaX = Math.abs(1 / Math.cos(angle));
        let deltaY = Math.abs(1 / Math.sin(angle));

        // calculate step direction
        let stepX, stepY;
        if (angle < Math.PI) {
            stepX = 1;
        } else {
            stepX = -1;
        }
        if (angle < Math.PI / 2 || angle > Math.PI * 3 / 2) {
            stepY = 1;
        } else {
            stepY = -1;
        }

        // calculate next x or y intersection
        let nextX = stepX > 0 ? mapX + 1 - x : x - mapX;
        let nextY = stepY > 0 ? mapY + 1 - y : y - mapY;

        // calculate distance to next intersection
        let distanceX = deltaX * nextX;
        let distanceY = deltaY * nextY;

        // check for wall intersection
        if (distanceX < distanceY) {
            x += distanceX * stepX;
            distanceToWall += distanceX;
            if (map[mapY][mapX + stepX] === 1) {
                hitWall = true;
            }
        } else {
            y += distanceY * stepY;
            distanceToWall += distanceY;
            if (map[mapY + stepY][mapX] === 1) {
                hitWall = true;
            }
        }
    }

    return distanceToWall;
}

setInterval(loop,1000/120);