let speedRect = 10;
let xRect = 165;
let yRect = 400;
let speedArc = 1;
let xArc = 205;
let yArc = 395;
let radius = 5;
let ballMove = new Ball(speedArc, xArc, yArc, radius);
let rectMove = new Rect(speedRect, xRect, yRect);

function control() {
    window.addEventListener("keydown", move);
}

function move(value) {
    switch (value.which) {
        case 37 :
            rectMove.moveLeft();
            clearScreen();
            rectMove.drawRect();
            break;
        case 39 :
            rectMove.moveRight();
            clearScreen();
            rectMove.drawRect();
            break;
    }
}

function clearScreen() {
    ctx.clearRect(0, 0, 400, 500);
}

function main() {
    clearScreen();
    rectMove.drawRect();
    ballMove.drawArc();
    moveBall();
    control(rectMove);
    requestAnimationFrame(main);
}

main();

function moveBall() {
    if (ballMove.xArc - ballMove.radius <= 400 && ballMove.yArc + ballMove.radius <= 200) {
        ballMove.cheoLenPhai();
    } if (ballMove.yArc + ballMove.radius >= 200 && ballMove.xArc - ballMove.radius <= 200) {
        ballMove.cheoLenTrai();
    }
    else if (ballMove.xArc === 200 && ballMove.yArc === 0) {
        ballMove.cheoXuongTrai();
    } else if (ballMove.yArc - ballMove.speedArc >= 200 + ballMove.radius && ballMove.xArc - ballMove.speedArc <= 200) {
        ballMove.cheoXuongPhai();
    }

}