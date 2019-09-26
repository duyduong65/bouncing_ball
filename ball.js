let Ball = function (speedArc, xArc, yArc, radius) {
    this.xArc = xArc;
    this.yArc = yArc;
    this.speedArc = speedArc;
    this.radius = radius;

    this.getSpeedArc = () => {
        return this.speedArc;
    };
    this.setSpeedArc = value => {
        this.speedArc = value;
    };
    this.getXArc = () => {
        return this.xArc;
    };
    this.setXArc = value => {
        this.xArc = value;
    };
    this.getYArc = () => {
        return this.yArc;
    };
    this.setYArc = value => {
        this.yArc = value;
    };
    this.getRadius = () => {
        return this.radius;
    };
    this.SetRadius = value => {
        this.radius = value;
    };

    this.cheoLenPhai = () => {
        this.xArc += this.speedArc;
        this.yArc -= this.speedArc;
    };
    this.cheoLenTrai = () => {
        this.yArc -= this.speedArc;
        this.xArc -= this.speedArc;
    };
    this.cheoXuongTrai = () => {
        this.xArc -= this.speedArc;
        this.yArc += this.speedArc;
    };
    this.cheoXuongPhai = () => {
        this.xArc += this.speedArc;
        this.yArc += this.speedArc;
    };

    this.drawArc = () => {
        ctx.beginPath();
        ctx.arc(this.xArc, this.yArc, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    };


};