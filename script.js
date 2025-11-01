// idk how to javascript chat
document.addEventListener('DOMContentLoaded', function() {
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

    document.getElementById('result').textContent = "[ x ]";

    let right = 0;

    // right/wrong
    document.addEventListener('keydown', function(event) {
        if (event.key === currentLetter) {
            right += 1;
            document.getElementById('result').textContent = '[ ' + right + ' ]';
            currentLetter = getLetter();
            document.getElementById('output').textContent = currentLetter;
            randomTilt();
            shakeScreen();
        } else {
            document.getElementById('result').textContent = '[ x ]';
        }
    });

    function randomTilt() {
      document.querySelectorAll('.left-img').forEach(img => {
        const angle = (Math.random() * 60) - 30;
        img.style.transform = `rotate(${angle}deg)`;
      });
      document.querySelectorAll('.right-img').forEach(img => {
        const angle = (Math.random() * 60) - 30;
        img.style.transform = `rotate(${angle}deg)`;
      });
    }

    // tilt images on page load
    randomTilt();

    // optional: repeat tilt every 2 seconds
    // setInterval(randomTilt, 2000);

    // i'm literally going to fall asleep and I just had a bit of Celsius??
    // heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeelp!!
    // ok it's time to lock back in again T_T
    // my computer crashed...
    // a tree fell down!
});