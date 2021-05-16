let letters = ['D', 'A', 'C', 'D', 'A', 'C', 'E', 'B', 'D', 'A', 'E', 'A']

function annoyingNephew(letters, moves) {
	let index = 0
		if (letters.length % 2) {
 			console.log("Number of letters are not even!");
 			return letters.length;
 		}
	for (var i = 0; i < moves; i++) {
		switch(letters) {
			case 'A':
			index += 1;
			break;
			case 'B':
			index += 4;
			break;
			case 'C':
			index += 2;
			break;
			case 'D':
			index += letters.length / 2;
			break;
			case 'E':
			index -= 2;
			break;
		}
	}
	return letters[index];
}
console.log(annoyingNephew(letters, 61));