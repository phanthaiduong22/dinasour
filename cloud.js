class Cloud {
    constructor() {
        this.w = 90;
        this.h = 60;
        this.x = width;
        this.y = height - 330 + Math.random(1) * 30;
        this.speed = -1;
    }
    move() {
        this.x += this.speed;
    }
    display() {
        image(cloudImg, this.x, this.y, this.w, this.h);
        // rect(this.x, this.y, this.w, this.w);
    }
}