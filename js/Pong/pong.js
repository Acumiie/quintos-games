// canvas width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;

// code in the setup function gets run once at the start of the game
function setup() {
	noStroke();

	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	// creates a ball sprite and places it in center of the screen
	ball = new Sprite();
	ball.image = imgBall;
	ball.x = canvas.w / 2;
	ball.y = canvas.h / 2;
	ball.diameter = 8;
	ball.bounciness = 1; // full bounciness
	ball.friction = 0; // no friction

	ball.direction = 20;
	ball.speed = 2;

	// TODO: create paddle sprites
	paddleL = new Sprite();
	paddleL.image = imgPaddle;
	paddleL.x = 20;
	paddleL.y = 98;
	paddleL.collider = 'k';

	paddleR = new Sprite();
	paddleR.image = imgPaddle;
	paddleR.x = 235;
	paddleR.y = 100;
	paddleR.collider = 'k';

	wallT = new Sprite();
	wallT.w = 260;
	wallT.h = 2;
	wallT.y = -5;
	wallT.x = 100;
	wallT.collider = 's';
	wallT.colour = 'white';

	wallB = new Sprite();
	wallB.w = 260;
	wallB.h = 2;
	wallB.y = 200;
	wallB.x = 120;
	wallB.collider = 's';
	wallB.colour = 'white';
}

let scoreL = 0;
let scoreR = 0;

let topSpeed = 2;

// code in the draw function gets run 60 times per second
function draw() {
	background('b');
	// TODO: move the paddles

	paddleL.speed = 3;
	if (kb.pressing('up')) {
		paddleL.direction = -90;
	} else if (kb.pressing('down')) {
		paddleL.direction = 90;
	} else {
		paddleL.speed = 0;
	}

	paddleR.speed = 3;
	if (kb.pressing('up2')) {
		paddleR.direction = -90;
	} else if (kb.pressing('down2')) {
		paddleR.direction = 90;
	} else {
		paddleR.speed = 0;
	}

	if (ball.collided(paddleL) || ball.collided(paddleR)) {
		topSpeed = topSpeed + 0.1;
		ball.speed = topSpeed;
	}

	if (ball.x > 400) {
		scoreL = scoreL + 1;
		txt(scoreL, 2, 5);
	}
	if (ball.x < -100) {
		scoreR = scoreR + 1;
		txt(scoreR, 2, 26);
	}
	if (ball.x > 400 || ball.x < -100) {
		ball.x = canvas.w / 2;
		ball.y = canvas.h / 2;
		topSpeed = 2;
		ball.speed = 2;
	}
}
