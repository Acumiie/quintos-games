// canvas width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;

// code in the setup function gets run once at the start of the game
function setup() {
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

	ball.direction = 45;
	ball.speed = 5;

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
	wallT.h = 1;
	wallT.y = 0;
	wallT.x = 100;
	wallT.collider = 's';
	wallB = new Sprite();
	wallB.w = 260;
	wallB.h = 1;
	wallB.y = 100;
	wallB.x = 100;
	wallB.collider = 's';
}

// code in the draw function gets run 60 times per second
function draw() {
	background('b');
	// TODO: move the paddles
}
