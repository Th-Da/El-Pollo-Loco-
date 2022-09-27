class MovableObject extends DrawableObject {

    speed = 1;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    lastHit = 0;
    bottleTimePassed = 2;

    applyGravity() {
        setStobbableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < this.ground;
        }
    }


    /**
     * 
     * This function checks if two objects are colliding with each other
     * @param {object} mo object the character is colliding width
     * @returns boolean if colliding
     */
    isColliding(mo) {

        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;

    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    kill() {
        this.energy = 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    setTimeSinceLastBottle() {
        this.bottleTimePassed = new Date().getTime();
    }

    getTimeSinceLastBottle() {
        let lastBottle = new Date().getTime() - this.bottleTimePassed;
        lastBottle = lastBottle / 1000;
        return lastBottle > 1.5;
    }

    /**
     * 
     * This funktion plays animation for a object
     * @param {Array} images images of objects
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }

    getEndbossPositionX() {
        for (let index = 0; index < level1.enemies.length; index++) {
            let endboss = level1.enemies[index];
            if (endboss instanceof Endboss) {
                return endboss.x;
            }
        }
    }
}

