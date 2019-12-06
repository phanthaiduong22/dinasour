class Obstacle {
    constructor() {
        this.w = 50;
        // this.h = 50;
        this.x = width;
        this.y = height - 88;
        this.speed = -5 - a;
        this.score = 0;
    }
    updateScore(dina) {
        if (dina.x > this.x && this.score == 0) {
            this.score = 1;
            score++;
        }
    }
    move() {
        this.x += this.speed;
    }
    display() {

        image(obsImg, this.x, this.y, this.w + 10, this.w + 10);
        // rect(this.x, this.y, this.w, this.w);
    }
}