let canvas;
let world;
let keyboard = new Keyboard();

function init() {

}

function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    removeStartEndElements();
}

function removeStartEndElements() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').style.backgroundImage = 'none';
    document.getElementById('endScreen').classList.add('d-none');
}

function gameOverScreen() {
    stopGame();
    document.getElementById('endScreen').classList.remove('d-none');    
}

function stopGame() {
    setIntervalIds.forEach(clearInterval);
}

function restartGame() {
    window.location = 'index.html';
}

function toggleFullScreen() {
    document.getElementById('canvas').requestFullscreen();
}


    