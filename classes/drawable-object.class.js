class DrawableObject {

    x = 0;
    img;
    imageCache = {};
    currentImage = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    /** 
     * 
     * This function loads the first image
     * @param {string} path image path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /** 
 * 
 * This function loads every image
 * @param {Array} path image path
 */
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
}