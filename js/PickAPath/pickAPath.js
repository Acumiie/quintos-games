async function start() {
	// your code goes here! below this line

	let path = 0;

	let hasHorse = false;
	let horseName;

	// while path is not null (nothing)
	while (path != null) {
		// null in this case indicates the player cancelled out of the prompt

		let message;
		let options;

		if (path == 0 && !hasHorse) {
			message =
				'Hello! How may I help you today?\n\n\t' +
				'1: I would like to buy a weapon.\n\t' +
				'2: I would like to buy armour.\n\t' +
				'3: I would like to buy healing potions.\n\t' +
				'4: I would like to buy a horse.\n\t' +
				'5: Exit store.';
			options = [1, 2, 3, 4, 5];
		} else if (path == 0 && hasHorse) {
			message =
				"Is there anything else you'd like?.\n\n\t" +
				'1: I would like to buy a weapon.\n\t' +
				'2: I would like to buy armour.\n\t' +
				'3: I would like to buy healing potions.\n\t' +
				'6: I would like to buy equipment for my horse.\n\t' +
				'5: Exit store.';
			options = [1, 2, 3, 6, 5];
		} else if (path == 1) {
			message =
				'These are our basic weapons. Take your pick!\n\n\t' +
				'14: Longsword\n\t' +
				'15: Longbow\n\t' +
				'16: Trident\n\t' +
				'0: Let me go back.';
			options = [14, 15, 16, 0];
		} else if (path == 2) {
			message =
				'Our selection of armour pieces will definitely keep you well protected!\n\n\t' +
				'7: Helmet\n\t' +
				'8: Chestplate\n\t' +
				'9: Leggings\n\t' +
				'10: Boots\n\t' +
				'0: Let me have another look.';
			options = [7, 8, 9, 10, 0];
		} else if (path == 3) {
			message =
				'Shall we get you all healed up?\n\n\t' +
				'11: Small health potion\n\t' +
				'12: Medium health potion\n\t' +
				'13: Large health potion\n\t' +
				"0: No I'm looking for something else";
			options = [11, 12, 13, 0];
		} else if (path == 4) {
			message =
				'These are the horses we have, take your pick!\n\n\t' +
				'17: Friesian horse\n\t' +
				'18: Mustang\n\t' +
				'19: Arabian horse\n\t' +
				'0: Nevermind';
			options = [17, 18, 19, 0];
		} else if (path == 6) {
			message =
				'Great! Which piece of equipment would you like?\n\n\t' +
				'20: Saddle\n\t' +
				'21: Reigns\n\t' +
				'22: Armour\n\t' +
				"0: I'm not interested in buying any of these items yet";
			options = [20, 21, 22, 0];
		} else if (path == 17 || path == 18 || path == 19) {
			horseName = await prompt("You've got a new horse! What would you like to name it?");

			message = 'Would you like to buy equipment for your new horse?\n\n\t' + '6: yes!\n\t' + '0: not right now';
			options = [6, 0];
		}
		// asks the player to choose a path
		let choice = await prompt(message);

		if (options.includes(choice)) {
			path = choice;
		} else {
			await alert('Invalid choice!');
		}
	}

	exit();
}
