class DrawableObject {
    
    x = 0;
    img;
    imageCache = {};
    currentImage = 0;
    bottle = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);   
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof SmallChicken || this instanceof Chicken || this instanceof Bottle1 || this instanceof Bottle2 || this instanceof Coin || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

/*     drawGameOverScreen() {
        this.loadImage(this.IMAGE_GAMEOVER);
    } */

    collect () {
        this.bottle += 20;
    }
}