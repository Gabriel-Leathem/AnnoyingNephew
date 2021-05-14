let letters = ['D', 'A', 'C', 'D', 'A', 'C', 'E', 'B', 'D', 'A', 'E', 'A']

function annoyingNephew(letters, moves) {
	if (letters.length % 2) {
		console.log("Number of letters are not even! STUPID PAUL!!!");
	}
	let index = 0
	for (var i = 0; i < moves; i++) {
		let currentLetter = letters[index];
		if (currentLetter == 'A') {
			index += 1;
		}
		if (currentLetter == 'B') {
			index += 4;
		}
		if (currentLetter == 'C') {
			index += 2;
		}
		if (currentLetter == 'D') {
			index += letters.length / 2;
		}
		if (currentLetter == 'E') {
			index -= 2;
		}
		if (index >= letters.length) {
			index -= letters.length;
		}
	}
	return letters[index];
}

console.log(annoyingNephew(letters, 61));