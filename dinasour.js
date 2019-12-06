class Dinasour {
    constructor() {
        this.x = 50;
        this.y = height - 88;
        this.w = 50;
        this.vy = 0;
        this.gravity = 0.5


    }

    hit(obstacle) {
        return collideRectRect(this.x + 5, this.y + 5, this.w - 10, this.w - 10, obstacle.x + 5, obstacle.y + 10, obstacle.w - 25, obstacle.w - 25);
    }

    hitPipe(obstacle) {
        return collideRectRect(this.x + 5, this.y, this.w - 10, this.w - 10, obstacle.x, obstacle.y, obstacle.w, obstacle.h) || collideRectRect(this.x + 5, this.y + 20, this.w - 10, this.w - 10, obstacle.x, obstacle.y2, obstacle.w, obstacle.h)
    }

    jump() {
        if (this.y == height - 88 && sun === 1) {
            this.vy = -10;
        } else if (sun === 0) {
            this.vy = -7;
        }
    }
    moveright() {
        if (this.x + 5 < width - 50)
            this.x += 3;
    }
    moveleft() {
        if (this.x + 5 > 0)
            this.x -= 3;
    }
    move() {
        if ((sun === 1 || sun === 0) && this.x !== 50) {
            if (this.x > 49 && this.x < 61)
                this.x = 50;
            if (this.x > 50)
                this.x -= 10;
            else {
                this.x += 10;
            }
        }
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - 88);
    }
    display() {
        // if (songoku) {
        //     image(songokuImg, this.x, this.y, this.w, this.w);
        // } else {
        image(dinaImg, this.x, this.y, this.w, this.w);
        // }
    }
}