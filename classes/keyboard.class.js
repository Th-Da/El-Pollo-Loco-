class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    DOWN = false;
    UP = false;

    constructor() {
        this.bindKeyPressEvents();
    }

    bindKeyPressEvents() {
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

        });
    }




} 