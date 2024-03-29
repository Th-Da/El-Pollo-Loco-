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
            Keyboard.LEFT = true;
            console.log(e.defaultPrevented);  // will be false
            console.log(e.defaultPrevented);  // still false
        }, { passive: true });

        document.getElementById('btnLeft').addEventListener('touchend', (e) => {
            Keyboard.LEFT = false;
            console.log(e.defaultPrevented)
        }, { passive: false });

        document.getElementById('btnRight').addEventListener('touchstart', (e) => {
            Keyboard.RIGHT = true;
        }, { passive: true });

        document.getElementById('btnRight').addEventListener('touchend', (e) => {
            Keyboard.RIGHT = false;
        }, { passive: false });

        document.getElementById('btnUp').addEventListener('touchstart', (e) => {
            Keyboard.UP = true;
        }, { passive: true });

        document.getElementById('btnUp').addEventListener('touchend', (e) => {
            Keyboard.UP = false;
        }, { passive: false });

        document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
            Keyboard.SPACE = true;
        }, { passive: true });

        document.getElementById('btnThrow').addEventListener('touchend', (e) => {
            Keyboard.SPACE = false;
        }, { passive: false });
    }
} 