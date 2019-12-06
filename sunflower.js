class Sunflower {
    constructor() {
        this.x = xSun;
        this.y = ySun;
        this.w = 50;
        this.score = 0;
    }
    move() {
        this.y += 1;
    }
    updateScore() {
        if (this.score === 0) {
            score++;
            this.score += 1;
        }
    }
    display() {
        if (this.score === 0)
            image(sunflowerImg, this.x, this.y, 100, 100);
    }
}