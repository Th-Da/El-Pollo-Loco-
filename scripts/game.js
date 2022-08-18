let canvas;
let world;
let keyboard = new Keyboard();

function init() {

}

function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('start-screen').remove();
    document.getElementById('canvas').style.backgroundImage = 'none';
}


function gameOverScreen() {
    stopGame();
    document.getElementById('canvas').style.backgroundImage = 'url(img_pollo_locco/img/9_intro_outro_screens/game_over/game_over.png)';
}

function stopGame() {
    setIntervalIds.forEach(clearInterval);
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        Keyboard.RIGHT = true;
    } if (e.keyCode == 37) {
        Keyboard.LEFT = true;
    } if (e.keyCode == 32) {
        Keyboard.SPACE = true;
    } if (e.keyCode == 40) {
        Keyboard.DOWN = true;
    } if (e.keyCode == 38) {
        Keyboard.UP = true;
    }

});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        Keyboard.RIGHT = false;
    } if (e.keyCode == 37) {
        Keyboard.LEFT = false;
    } if (e.keyCode == 32) {
        Keyboard.SPACE = false;
    } if (e.keyCode == 40) {
        Keyboard.DOWN = false;
    } if (e.keyCode == 38) {
        Keyboard.UP = false;
    }

})