class Coin extends MovableObject {

    width = 130;
    height = 130;

    y = 50

    IMAGES = [
        'img_pollo_locco/img/8_coin/coin_1.png',
        'img_pollo_locco/img/8_coin/coin_2.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.x = 200 + Math.random() * 1900;
        this.y = Math.random() * 300;
        this.animate();
    }

    animate() {

        setStobbableInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 450);
    }
}