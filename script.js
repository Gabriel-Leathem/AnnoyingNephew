let canvas = document.querySelector('canvas');
//ctx = context
let ctx = canvas.getContext('2d');

let letters = []
let moves = 61;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    requestAnimationFrame(animate);
    for (var i = 0; i < letters.length; i++) {
        let angle = map(i, 0, letters.length, 0, 2 * Math.PI);
        ctx.fillText(letters[i], -65 * Math.cos(-angle) + 100, 65 * Math.sin(-angle) + 75);
    }
}



function map(num, numMin, numMax, mapMin, mapMax) {
    return mapMin + ((mapMax - mapMin) / (numMax - numMin)) * (num - numMin);
}

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
        }
        return letters[index];
    }

// Letter functions
document.getElementById("addLetter").addEventListener("click", function() {
    let value = document.getElementById('letter').value.toUpperCase();
    if (/[ABCDE]/g.test(value)) {
        letters.push(value);
    }
});

document.getElementById("letter").addEventListener("input", function() {
    if (this.value.length > 1) {
        this.value = this.value[0];
    }
});

// Move functions
document.getElementById("movesCount").addEventListener("input", function(event) {
    movesCount = parseInt(this.value);
    document.getElementById("movesCount-text").textContent = "Moves: " + parseInt(this.value);
});

document.getElementById("start-program").addEventListener("click",function() {
    document.getElementById("moves-output").textContent = "The letter after " + moves + " moves is " + annoyingNephew(letters, moves);
})

//error
window.addEventListener("error", function() {
    document.getElementById("moves-output").textContent = "Error, check the console!"
});

animate();