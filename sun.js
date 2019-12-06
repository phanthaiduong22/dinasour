class Sun {
    constructor() {
        this.w = 100;
        // this.h = 50;
        this.x = width;
        this.y = height - 250;
        this.speed = -0.5;
        this.vy = -0.4;
        this.gravity = 0.00055;
    }
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - 250);
        this.x += this.speed;
        if (this.x == -80) {
            console.log(sun);
            this.x = width;
            sun = Math.abs(sun - 1);
            this.startAgain();
            a += 0.5;
            // console.log(a);  
        }
    }
    display() {
        if (sun == 1) {
            image(sunImg, this.x, this.y, this.w, this.w);
        }
        else if (sun == 0) {
            image(moonImg, this.x, this.y, this.w, this.w);
        }
        // rect(this.x, this.y, this.w, this.w);
    }
    startAgain() {
        this.w = 80;
        // this.h = 50;
        this.x = width;
        this.y = height - 250;
        this.speed = -0.5;
        this.vy = -0.25;
        this.gravity = 0.0003;
    }

}