let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    bindBtnsPressEventens();
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


function bindBtnsPressEventens() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        Keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        Keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        Keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        Keyboard.LEFT = false;
    });

    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        Keyboard.UP = true;
    });

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();

        Keyboard.LEFT = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        Keyboard.SPACE = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        Keyboard.LEFT = false;
    });
}