// idk how to javascript chat
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function getLetter() {
    const index = Math.floor(Math.random() * alphabet.length);
    return alphabet[index];
}

function shakeScreen() {
  const screen = document.getElementById('screen');
  screen.classList.add('shake');
  setTimeout(() => screen.classList.remove('shake'), 400);
}

// generate new letter
let currentLetter = getLetter();
document.getElementById('output').textContent = currentLetter;

document.getElementById('result').textContent = "type!";

// right/wrong
document.addEventListener('keydown', function(event) {
    if (event.key === currentLetter) {
        document.getElementById('result').textContent = 'yay';
        currentLetter = getLetter();
        document.getElementById('output').textContent = currentLetter;
        shakeScreen();
    } else {
        document.getElementById('result').textContent = 'nay';
    }

});

// i'm literally going to fall asleep and I just had a bit of Celsius??
// heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeelp!!
// ok it's time to lock back in again T_T
// my computer crashed...
// a tree fell down!