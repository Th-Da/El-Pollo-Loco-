class SmallChicken extends MovableObject {

    width = 40;
    height = 40;
    y = 395;

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
        this.x = 300 + Math.random() * 1900;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setStobbableInterval(() => {
            this.moveLeft();
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


}