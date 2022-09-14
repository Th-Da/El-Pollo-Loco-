class Chicken extends MovableObject {

    width = 80;
    height = 80;
    y = 350;;

    energy = 1;
    isHittet = false;
    isAtMapStart = false;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    IMAGES_WALKING = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 350 + Math.random() * 1900;
        this.speed = 1 + Math.random() * 0.5;
        this.animate();
    }


    animate() {
        setStobbableInterval(() => {
            if (this.otherDirection) {
                this.otherDirection = false
            } else if (!this.otherDirection) {
                this.otherDirection = true;
            }
        }, 20000);

        setStobbableInterval(() => {
            if (this.otherDirection) {
                this.moveRight();
            } else {
                this.moveLeft();
            }
        }, 30)

        setStobbableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }


}
