class MovableObject {
    x = 120;
    y = 350
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15


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
    
    
    moveR() {
        console.log('moving right')
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}