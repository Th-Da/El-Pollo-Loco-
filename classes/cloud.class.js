class Cloud extends MovableObject {
    y = 15;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img_pollo_locco/img/5_background/layers/4_clouds/1.png');
        this.x = 10 + Math.random() * 3500;
        this.y = 15 + Math.random() * 40;
        this.speed = 0.01 + Math.random() * 0.1;
        this.animate();

    }

    animate() {
        setStobbableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }



}