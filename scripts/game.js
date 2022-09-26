let canvas;
let world;
let keyboard;
let gameSounds = true;

function init() {
    keyboard = new Keyboard;
}

function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    removeStartEndElements();
}

function removeStartEndElements() {
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').style.backgroundImage = 'none';
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('btnsBottom').style.display = 'flex';
    document.getElementById('fullScreen').classList.remove('d-none');
}

function gameOverScreen() {
    exitFullscreen();
    stopGame();
    document.getElementById('endScreen').classList.remove('d-none');
}

function winScreen() {
    exitFullscreen();
    stopGame();
    document.getElementById('winScreen').classList.remove('d-none');
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

function mutePlayAudio() {
    let muteAudio = document.getElementById('muteButton');
    let playAudio = document.getElementById('volumeOn');
    if (gameSounds == true) {
        gameSounds = false;
        muteAudio.classList.remove('d-none');
        playAudio.classList.add('d-none');
    }
    else {
        gameSounds = true;
        muteAudio.classList.add('d-none');
        playAudio.classList.remove('d-none');

    }
}

function exitFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}


