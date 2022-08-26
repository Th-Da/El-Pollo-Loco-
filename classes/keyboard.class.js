class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    DOWN = false;
    UP = false;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtnsPressEventens();
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

    bindBtnsPressEventens() {
        document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            Keyboard.LEFT = true;
        });

        document.getElementById('btnLeft').addEventListener('touchend', (e) => {
            Keyboard.LEFT = true;
        });

        document.getElementById('btnRight').addEventListener('touchstart', (e) => {
            Keyboard.RIGHT = true;
        });

        document.getElementById('btnRight').addEventListener('touchend', (e) => {
            Keyboard.LEFT = false;
        });

        document.getElementById('btnUp').addEventListener('touchstart', (e) => {
            Keyboard.UP = true;
        });

        document.getElementById('btnUp').addEventListener('touchend', (e) => {
            Keyboard.LEFT = true;
        });

        document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
            Keyboard.SPACE = true;
        });

        document.getElementById('btnThrow').addEventListener('touchend', (e) => {
            Keyboard.LEFT = false;
        });
    }



} 