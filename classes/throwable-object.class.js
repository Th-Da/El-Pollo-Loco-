class ThrowableObject extends MovableObject {

    width = 120;
    height = 100;


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
    ]





    constructor(x, y) {
        super().loadImage(this.IMAGES_TRHOWABLE[0]);
        this.loadImages(this.IMAGES_TRHOWABLE);
        this - this.loadImages(this.IMAGES_TRHOWABLE_SPLASH);
        this.x = x;
        this.y = y;
        this.throw(x, y);
    }


    throw() {
        setStobbableInterval(() => {
            this.playAnimation(this.IMAGES_TRHOWABLE)
            this.applyGravity();
            this.speedY = 7;
            this.x += 30;
            level1.enemies.forEach(enem => {
                if (enem.isHittet) {
                    this.playAnimation(this.IMAGES_TRHOWABLE_SPLASH);
                    enem.isHittet = false;
                }
            });

        }, 100);
    }
}