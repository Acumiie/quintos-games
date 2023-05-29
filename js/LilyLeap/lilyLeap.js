let frog, lilypads;

function preload() {
	frog = new Sprite();
	lilypads = new Group();
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 0;
	frog.y = 80;
	frog.w = 10;
	frog.h = 8;

	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';

	makeLilyPads();
}

function makeLilyPads() {
	// TODO: use a loop to make more lily pads
	let i = 0;

	while (i < 100) {
		let lily = new lilypads.Sprite();
		lily.x = i * 16;
		i++; // shorctur for i = i + 1;
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, canvas.w, 90);

	if (frog.y > 83) {
		frog.x = round(frog.x / 16) * 16;
		if (kb.presses('up')) {
			// little jump
			frog.velocity.y = -1.4;
			frog.velocity.x = 0.97;
		} else if (kb.presses('right')) {
			// BIG jump!
			frog.velocity.y = -2;
			frog.velocity.x = 1.35;
		}
	}
	camera.x = frog.x + 64;
}
