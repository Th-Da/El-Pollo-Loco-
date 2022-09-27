class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    camera_x = -10;
    x;
    StatusBarHealth = new StatusBarHealth();
    StatusBarBottles = new StatusBarBottles();
    StatusBarCoins = new StatusBarCoins();
    throwableObjects = [];
    backgroundMusic = new Audio('audio/background-music.mp3');
    timeSinceLastBottle = 2;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = Keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.run();
    };

    setWorld() {
        this.character.world = this;
    }

    run() {
        setStobbableInterval(() => {
            this.playBackgroundMusic();
            this.checkCollision();
            this.createThrowableObjects();
            this.checkIfEnemyIsHitByBottle();
            this.checkCollectableObjects();
        }, 25);
    }

    playBackgroundMusic() {
        if (gameSounds) {
            this.backgroundMusic.volume = 0.02;
            this.backgroundMusic.play();
            this.backgroundMusic.loop = true;
        } else {
            this.backgroundMusic.pause();
        }
    }

    checkCollision() {
        this.level.enemies.forEach(enemy => {
            if (this.characterAndEnemyCollides(enemy)) {
                if (this.normalChickenIsHittedFromTop(enemy)) {
                    this.hitEnemy(enemy);
                } else {
                    this.character.hit();
                    this.StatusBarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }

    createThrowableObjects() {
        if (this.ableToThrowBottle()) {
            this.character.setTimeSinceLastBottle();
            if (this.character.otherDirection) {
                this.creatBottleLeft();
            } else if (!this.character.otherDirection) {
                this.creatBottleRight();
            }
            this.character.bottle -= 20;
            this.StatusBarBottles.setPercentage(this.character.bottle);
        }
    }

    checkIfEnemyIsHitByBottle() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach(bottle => {
                if (this.bottleHitsEnemy(bottle, enemy)) {
                    this.hitEnemy(enemy);
                    bottle.bottleBreak = true;
                }
            });
        });
    }

    hitEnemy(enemy) {
        if (!(enemy instanceof Endboss)) {
            enemy.kill();
            setTimeout(() => {
                let deleteEnemy = this.level.enemies.indexOf(enemy);
                this.level.enemies.splice(deleteEnemy, 1);
            }, 1000);
        } else
            enemy.hit();
    }

    checkCollectableObjects() {
        this.level.objects.forEach((object, index) => {
            if (this.character.isColliding(object)) {
                if (object instanceof Bottle && this.character.bottle < 100)
                    this.collectBottle(index);
                if (object instanceof Coin && this.character.coin < 80)
                    this.collectCoin(index);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.objects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.StatusBarHealth);
        this.addToMap(this.StatusBarBottles);
        this.addToMap(this.StatusBarCoins);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * 
     * This function adds each object of an array to the map
     * @param {Array} objects objects
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * 
     * This function adds a single object to the map
     * @param {object} mo single object
     */
    addToMap(mo) {
        if (mo.otherDirection)
            this.flipImage(mo);
        mo.draw(this.ctx);
        if (mo.otherDirection)
            this.flipImageBack(mo);
    }

    /**
     * 
     * This function flips the image to the left
     * @param {object} mo single object
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * 
     * this function flips the image to the right
     * @param {object} mo single object
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    creatBottleLeft() {
        this.throwableObjects.push(new ThrowableObject(this.character.x - 100, this.character.y + 100));
    }

    creatBottleRight() {
        this.throwableObjects.push(new ThrowableObject(this.character.x + 100, this.character.y + 100));
    }

    characterAndEnemyCollides(enemy) {
        return this.character.isColliding(enemy) &&
            !this.character.isHurt() &&
            !enemy.isHurt() &&
            !enemy.isDead()
    }

    normalChickenIsHittedFromTop(object) {
        return !(object instanceof Endboss) &&
            !(object instanceof SmallChicken) &&
            this.character.isColliding(object) &&
            this.character.speedY < 0 &&
            this.character.isAboveGround() &&
            !(object.isDead())
    }

    normalChickenHitsCharacter(enemy) {
        return this.character.isColliding(enemy) && !(enemy.isHurt())
    }

    ableToThrowBottle() {
        return this.keyboard.SPACE &&
            this.character.bottle > 0 &&
            this.character.getTimeSinceLastBottle()
    }

    bottleHitsEnemy(bottle, enemy) {
        return bottle.isColliding(enemy) &&
            !enemy.isDead() &&
            !bottle.bottleBreak
    }

    collectCoin(index) {
        this.character.collectCoin();
        this.StatusBarCoins.setPercentage(this.character.coin);
        this.level.objects.splice(index, 1);
    }

    collectBottle(index) {
        this.character.collectBottle();
        this.StatusBarBottles.setPercentage(this.character.bottle);
        this.level.objects.splice(index, 1);
    }
}