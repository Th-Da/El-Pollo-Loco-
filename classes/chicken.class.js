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
            this.moveLeft();
            if (this.x <= 10) {
                clearInterval(moveLeft);
                this.otherDirection = true;
                var moveRight = setInterval(() => {
                    this.moveRight();
                }, 1000);
            } if (this.x > this.getEndbossPositionX() - 200) {
                this.otherDirection = false;
                clearInterval(moveRight);
                var moveLeft = setInterval(() => {
                    this.moveLeft();
                }, 1000);


            }
        }, 1000 / 60);

        setStobbableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    getChickenPosition() {
        level1.enemies.forEach(enemy => {
            return enemy.x
        });
    }



}
