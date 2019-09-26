let ctx = document.getElementById('myBoardGame').getContext("2d");
let Rect = function (speedRect, xRect, yRect) {
    this.speedRect = speedRect;
    this.xRect = xRect;
    this.yRect = yRect;

    this.getXRect = () => {
        return this.xRect
    };
    this.getYRect = () => {
        return this.yRect
    };
    this.getSpeed = () => {
        return this.speedRect;
    };
    this.moveLeft = () => {
        if (this.getXRect() >= 0) {
            this.xRect -= this.speedRect;
        }
    };
    this.moveRight = () => {
        if (this.getXRect() <= 330) {
            this.xRect += this.speedRect;

        }
    };
    this.drawRect = () => {
        ctx.beginPath();
        ctx.rect(this.xRect, this.yRect, 70, 10);
        ctx.fillStyle = "Brown";
        ctx.fill();
    }
};