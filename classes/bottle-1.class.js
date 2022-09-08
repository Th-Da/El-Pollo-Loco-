class Bottle1 extends DrawableObject {

    width = 90;
    height = 70;
    x = 25;
    y = 365;


    constructor() {
        super().loadImage('img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 200 + Math.random() * 1900;
    }
    
};