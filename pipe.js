class Pipe {
    constructor() {
        this.random = -Math.floor(Math.random(1) * 100);
        this.distance = 130;
        this.w = 50;
        this.h = 200;
        this.x = width - 50;
        this.y = this.random + this.h + this.distance;
        this.speed = - 3 - a;
        this.score = 0;

        //
        this.y2 = this.random;


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
        image(pipeImg, this.x, this.y, this.w, this.h);
        image(pipe2Img, this.x, this.y2, this.w, this.h);
        // fill(50);
        // rect(this.x, this.y, this.w, this.h);
    }
}