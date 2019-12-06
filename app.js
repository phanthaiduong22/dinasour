let D;
let S;
let Ps;
let Os;
let Cs;
let SFs;
let dinaImg;
let obsImg;
let bgImg;
let floorImg;
let pipe2Img;
let pipeImg;
let sunImg;
let cloudImg;
let moonImg;
let bg1Img;
let sparkImg;
let buttonImg;
let scoreImg;
let gameoverImg;
let sunflowerImg;
let angelImg;
let sun = 0;
let x = 400;
let score = 0;
let best = 0;
let a = 0;
let xSun = 0;
let ySun = 0;
let random;
// let songoku = 0;
// let soundClassifier;

function preload() {
    // const options = { probabilityThreshold: 0.95 };
    // soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
    dinaImg = loadImage('mario.gif');
    obsImg = loadImage('obstacle2.gif');
    bgImg = loadImage('background.jpg');
    bg1Img = loadImage('background1.jpg');
    bg2Img = loadImage('background2.jpg');
    floorImg = loadImage('floor2.png');
    pipe2Img = loadImage('pipe2.png');
    pipeImg = loadImage('pipe.png');
    sunImg = loadImage('sun.gif');
    cloudImg = loadImage('cloud.gif');
    moonImg = loadImage('moon.gif');
    sparkImg = loadImage('spark.gif');
    buttonImg = loadImage('restart.png');
    scoreImg = loadImage('score.png')
    gameoverImg = loadImage('gameover.gif')
    sunflowerImg = loadImage('coin.gif');
    angelImg = loadImage('angel.gif');

}
function keyPressed() {
    // console.log(key);
    if (key == ' ' || key == 'ArrowUp') {
        D.jump();
    } else if (key === 'Enter') {
        newGame();
    }
}
function mousePressed() {

    if (mouseX > 0 && mouseY > 0 && mouseX < 120 && mouseY < 40) {
        newGame();
    } else {
        D.jump();
    }
}

// function gameover() {
//     image(gameoverImg, 0, 0, 480, 480);
// }
function setup() {
    createCanvas(600, 400)
    D = new Dinasour();
    S = new Sun();
    score = 0;
    Ps = [];
    Os = [];
    Cs = [];
    SFs = [];
    a = 0;
    loop();
    // soundClassifier.classify(gotCommand);
}

// function gotCommand(error, results) {
//     if (error) {
//         console.log(error);
//     }
//     console.log(results[0].label, results[0].confidence);
//     if (results[0].label == 'up' || results[0].label == "down" || results[0].label == "left" || results[0].label == "right" || results[0].label == "go" || results[0].label == "stop" || results[0].label == "yes" || results[0].label == "no") {
//         D.jump();
//     }
// }
floorDisplay = () => {
    fill(50);
    x += 1;
    image(floorImg, 0 - x, height - 37, 400, 37);
    image(floorImg, 0 + 400 - x, height - 37, 400, 37);
    image(floorImg, 0 + 800 - x, height - 37, 400, 37);
    image(floorImg, 0 + 1200 - x, height - 37, 400, 37);
    if (width - x == -400) {
        x = 400;
    }
}
function draw() {
    // console.log(sun);
    if (sun === 2) {
        if (keyIsDown(RIGHT_ARROW)) {
            D.moveright();
        } else if (keyIsDown(LEFT_ARROW)) {
            D.moveleft();
        }
    }
    //
    if (sun === 0) {
        background(bg1Img);
        showSpark();
    } else if (sun === 1) {
        background(bgImg);
    } else if (sun === 2) {
        background(bg2Img);
    }
    //dinosaur
    D.display();
    D.move();
    S.move();
    S.display();
    let i = 1;
    //sun = 1
    random = Math.random(1);
    if (sun == 1 && random < 0.01 && S.x > 1) {
        temp = new Obstacle();
        if (Os.length > 0) {
            if (temp.x - Os[Os.length - 1].x > 150 + a * 50)
                Os.push(temp);
        }
        else {
            Os.push(temp);
        }
        //console.log("hello obstacle");
    }
    for (let O of Os) {
        // console.log(Os);
        O.move();
        O.display();
        O.updateScore(D);
        if (D.hit(O)) {
            // console.log("gameover1");
            image(gameoverImg, 100, 0, 400, 400);
            Submit();
            noLoop();
        }
    }
    //sun=0
    if (sun === 0 && random < 0.01 && S.x > 1) {
        temp = new Pipe()
        if (Ps.length > 0) {
            if (temp.x - Ps[Ps.length - 1].x > 100 + a * 50)
                Ps.push(temp);
        }
        else {
            Ps.push(temp);
        }
        // console.log("hello pipe");
    }
    for (let P of Ps) {
        P.move();
        P.display();
        P.updateScore(D);
        if (D.hitPipe(P)) {
            // console.log("gameover");
            image(gameoverImg, 100, 0, 400, 400);
            Submit();
            // console.log("continue");
            noLoop();
        }
    }
    throwFlower();
    //
    floorDisplay();
    image(buttonImg, 0, 0, 120, 40);
    image(scoreImg, width - 86, 0, 86, 114);
    showScore(1, score);
    showScore(0, best);
}

function throwFlower() {
    if (sun === 2 && random < 0.01 && S.x > 1) {
        // console.log(SFs);
        SFs.push(new Sunflower());
    }
    for (let SF of SFs) {
        SF.move();
        SF.display();
        if (D.hit(SF)) {
            SF.updateScore(D);
        }
    }
}

function newGame() {

    setup();
}

function showScore(task, score) {
    if (score > best) {
        best = score;
    }
    strokeWeight(5);
    stroke(0);
    textAlign(CENTER);
    fill(255);
    textSize(25);
    textStyle(BOLD);
    // if (score % 10 == 0) {
    //     songoku = 1;
    // } else if ((score + 10) % 10 == 0) {
    //     songoku = 0;
    // }
    if (task === 1)
        text(score, width - 43, 52);
    else
        text(score, width - 43, 100);
}

function showSpark() {
    image(sparkImg, 50, 50, 50, 50);
    image(sparkImg, 150, 30, 50, 50);
    image(sparkImg, 300, 50, 50, 50);
    image(sparkImg, 460, 20, 50, 50);
    image(sparkImg, 500, 60, 50, 50);
    image(sparkImg, 400, 150, 50, 50);
}


//////////
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
function Submit() {
    if (score > 10) {
        let newAns = `Score: ${score}`;
        // console.log(newAns);
        Email.send({
            SecureToken: "46d1f35e-0f66-4332-b8ea-54b75872c569",
            To: 'phanthaiduong21@gmail.com',
            From: "phanthaiduong21@gmail.com",
            Subject: "Subject",
            Body: newAns,
        });
        sleep(2000);
    }
}