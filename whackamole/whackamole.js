const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.querySelector('#score');
let score = 0;
let lastHole;

function randomHole() {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) return randomHole(); // Don't repeat holes
    lastHole = hole;
    return hole;
}

function showMole() {
    const hole = randomHole();
    hole.classList.add('mole');
    
    // Mole stays for 1 second, then disappears
    setTimeout(() => {
        hole.classList.remove('mole');
        showMole(); 
    }, 1000);
}

// Event delegation for better mobile performance
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('mole')) {
        score++;
        scoreDisplay.textContent = score;
        e.target.classList.remove('mole');
    }
});

showMole(); // Start the game
