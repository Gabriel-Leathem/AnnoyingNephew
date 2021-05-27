let letters = ["D", "A", "C", "D", "A", "C", "E", "B", "D", "A", "E", "A", "E"]
let moves = 61;

function annoyingNephew(letters, moves) {
    if (letters.length % 2) {
        throw Error("Number of letters must be even!")
    }
    let index = 0
    for (var i = 0; i < moves; i++) {
        let currentLetter = letters[index];
        switch (letters[index]) {
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
            if (index >= letters.length)  {
                    index -= letters.length;
            }
                    console.log(letters[index]);
        }
        return letters[index];
    }

document.getElementById("moves-output").textContent = "The letter after " + moves + " moves is " + annoyingNephew(letters, moves) + ". Check console for full procedure!";