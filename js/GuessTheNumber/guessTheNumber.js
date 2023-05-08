async function start() {
	// your code goes here!
	let num = round(random(1, 100));
	let guess;
	while (guess != num) {
		guess = await prompt('Guess a number 1 to 100?');
		if (guess == num) {
			await alert('Correct!');
		} else if (guess > num) {
			await alert('Too high!');
		} else if (guess < num) {
			await alert('Too low!');
		}
	}
	exit();
}
