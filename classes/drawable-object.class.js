class DrawableObject {

    x = 0;
    img;
    imageCache = {};
    currentImage = 0;

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
        if (
            this instanceof Character ||
            this instanceof Chicken ||
            this instanceof SmallChicken ||
            this instanceof Endboss ||
            this instanceof Coin ||
            this instanceof Bottle1
        ) {
            ctx.beginPath();
            ctx.lineWidth = '5'
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }
    }

    drawFrame2(ctx) {
        if (
            this instanceof Character ||
            this instanceof Chicken ||
            this instanceof SmallChicken ||
            this instanceof Endboss ||
            this instanceof Coin ||
            this instanceof Bottle1 ||
            this instanceof Bottle2
        ) {
            ctx.beginPath();
            ctx.lineWidth = '5'
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.bottom - this.offset.top)
            ctx.stroke();
        }
    }
}