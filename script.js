let canvas = document.querySelector('canvas');
//ctx = context
let ctx = canvas.getContext('2d');

let letters = []
let moves = 61;

ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

function annoyingNephew(letters, moves) {
    if (letters.length % 2) {
        throw Error("Number of letters must be even!")
    }
    if (moves > 0) {

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
        }
        return letters[index];
    }

// Letter functions
document.getElementById("addLetter").addEventListener("click", function() {
    letters.push(document.getElementById('letter').value.toUpperCase());
});

document.getElementById("letter").addEventListener("input", function() {
    if (this.value.length > 1) {
        this.value = this.value[0];
    }
});

// Move functions
document.getElementById("addMoves").addEventListener("click") function() {
    
}

document.getElementById("moves-output").textContent = "The letter after " + moves + " moves is " + annoyingNephew(letters, moves);