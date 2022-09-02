class Endboss extends MovableObject {

    width = 250;
    height = 400;
    y = 60
    energy = 50;
    speed;


    IMAGES_WALKING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_HURT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500;
        this.animate();
    }

    animate() {



        setStobbableInterval(() => {
            if (this.isDead()) {
                this.playDead();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            }
            else if (world && this.calculatedistance() < 850) {
                if (!this.isHittet) {
                    this.speed = 1, 5;
                    this.playAnimation(this.IMAGES_WALKING);
                    setStobbableInterval(() => {
                        this.moveLeft();
                    }, 1000);
                } else if (this.calculatedistance() > 700) {
                    this.speed = 0
                }

            }


        }, 200);
    }

    calculatedistance(distance) {
        distance = this.x - world.character.x
        return distance;
    }

    playDead() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(function () {
            winScreen();
            world.backgroundMusic.pause();
        }, 700)
    }


}