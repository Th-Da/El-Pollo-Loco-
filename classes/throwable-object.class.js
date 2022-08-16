class ThrowableObject extends MovableObject {

    width = 120;
    height = 100;


    IMAGES_TRHOWABLE = [
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];





    constructor(x, y) {

        super().loadImage(this.IMAGES_TRHOWABLE[0]);
/*         this.loadImages(this.IMAGES_TRHOWABLE);
 */     this.x = x;
        this.y = y;
        this.throw(x, y);
    }


    throw() {

        this.speedY = 20;
        this.applyGravity();
        setStobbableInterval(() => {
            this.x += 10;
        }, 20);
    }

}