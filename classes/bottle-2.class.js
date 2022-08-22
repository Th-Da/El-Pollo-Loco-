class Bottle2 extends DrawableObject {

    width = 120;
    height = 100;
    x = 25;
    y = 340;


    constructor() {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 200 + Math.random() * 1900;
    }
};