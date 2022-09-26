class ThrowableObject extends MovableObject {

    width = 120;
    height = 100;

    /*     offset = {
            top: 5,
            left: 25,
            right: 25,
            bottom: 5
        } */

    IMAGES_TRHOWABLE = [
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_TRHOWABLE_SPLASH = [
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_TRHOWABLE[0]);
        this.loadImages(this.IMAGES_TRHOWABLE);
        this - this.loadImages(this.IMAGES_TRHOWABLE_SPLASH);
        this.x = x;
        this.y = y;
        this.setDirection();
        this.throw(x, y);
    }

    throw() {
        setStobbableInterval(() => {
            if (this.otherDirection) {
                this.x -= 25
                this.speed = -6;
            }
            if (!this.otherDirection) {
                this.x += 25;
                this.speedY = 6;
            }
            this.playAnimation(this.IMAGES_TRHOWABLE)
            this.applyGravity();
            world.level.enemies.forEach(enem => {
                if (enem.isHittet) {
                    this.playAnimation(this.IMAGES_TRHOWABLE_SPLASH);
                    enem.isHittet = false;
                }
            });
        }, 120);
    }

    setDirection() {
        if (world.character.otherDirection)
            this.otherDirection = true;
        if (!world.character.otherDirection)
            this.otherDirection = false;

    }
}