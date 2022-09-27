let canvas;
let world;
let keyboard;
let gameSounds = true;

/**
 * Initializes keys onload
 */
function init() {
    keyboard = new Keyboard;
}

/**
 * Starts the game onklick
 */
function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    removeStartEndElements();
}

/**
 * Removes some html Elements when starting the game
 */
function removeStartEndElements() {
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').style.backgroundImage = 'none';
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('btnsBottom').style.display = 'flex';
    document.getElementById('fullScreen').classList.remove('d-none');
    document.getElementById('note').classList.add('d-none');
}

/**
 * Shows a specific screen when loosing the game
 */
function gameOverScreen() {
    exitFullscreen();
    stopGame();
    document.getElementById('endScreen').classList.remove('d-none');
}

/**
 * Shows a specific screen when winning the game
 */
function winScreen() {
    exitFullscreen();
    stopGame();
    document.getElementById('winScreen').classList.remove('d-none');
}

/**
 * Stops the game by clearing all intervals when loosing or winning
 */
function stopGame() {
    setIntervalIds.forEach(clearInterval);
}

/**
 * Restarts onklick when the game stoped
 */
function restartGame() {
    window.location = 'index.html';
}

/**
 * Play on fullscreen 
 */
function toggleFullScreen() {
    document.getElementById('canvas').requestFullscreen();
}

/**
 * Exit the fullscreen mode
 */
function exitFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

/**
 * Mutes and unmutes the backgroundmusic onlclick
 */
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


