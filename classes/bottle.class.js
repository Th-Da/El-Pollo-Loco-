class Bottle extends DrawableObject {

    width = 120;
    height = 100;
    x = 25; 
    y = 340;

    IMAGES = [
        'img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 
        'img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);

        this.x = 200 + Math.random() * 1900;
    }

}