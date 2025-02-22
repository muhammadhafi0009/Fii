const mario = document.getElementById('mario');
const coin = document.getElementById('coin');

let marioPosition = 50; // Initial position of Mario
let coinPosition = 200; // Initial position of the coin

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        marioPosition += 10; // Move Mario to the right
        mario.style.left = marioPosition + 'px';
    } else if (event.key === 'ArrowLeft') {
        marioPosition -= 10; // Move Mario to the left
        mario.style.left = marioPosition + 'px';
    } else if (event.key === 'ArrowUp') {
        // Jump logic can be added here
    }

    // Check for coin collection
    if (marioPosition + 50 > coinPosition && marioPosition < coinPosition + 30) {
        alert('You collected a coin!');
        // Reset coin position
        coinPosition = Math.floor(Math.random() * (window.innerWidth - 30));
        coin.style.left = coinPosition + 'px';
    }
});