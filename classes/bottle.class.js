class Bottle extends DrawableObject {

    width = 90;
    height = 70;
    x = 25;
    y = 365;

    offset = {
        top: 5,
        left: 35,
        right: 15,
        bottom: 5
    }

    constructor() {
        const randomImg = Math.floor(1 + Math.random() * 2);
        super().loadImage(`img_pollo_locco/img/6_salsa_bottle/${randomImg}_salsa_bottle_on_ground.png`);
        this.x = 200 + Math.random() * 1900;
    }
};