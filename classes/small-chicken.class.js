class SmallChicken extends MovableObject {

    width = 60;
    height = 60;
    y = 375;

    energy = 1;
    isHittet = false;
    ground = 375;
    speed = 10
    otherDirection = Math.random() < 0.5;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    IMAGES_WALKING = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 1900;
        this.speed = 0.15 + Math.random() * 0.5;
        this.applyGravity();
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
        }, 30);

        setStobbableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);

        setStobbableInterval(() => {
            if (!this.isAboveGround() && !this.isDead()) {
                this.jump()
            }
        }, 1000)
    }
}