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
    isHittet = false;
    enemyPositionX;

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
            this.checkCollision();
            this.createThrowableObjects();
            this.checkCollectableObjects();
            this.checkIfEnemyIsHit();
            this.playBackgroundMusic();
        }, 200);
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

    createThrowableObjects() {
        if (this.keyboard.SPACE && this.character.bottle > 0) {
            if (this.character.otherDirection) {
                this.creatBottleLeft();
            } else if (!this.character.otherDirection) {
                this.creatBottleRight();
            }
            this.character.bottle -= 20;
            this.StatusBarBottles.setPercentage(this.character.bottle);
        }
    }

    checkIfEnemyIsHit() {
        this.level.enemies.forEach((object) => {
            if (this.normalChickenIsHittedFromTop(object)) {
                this.hitEnemy(object);
                object.isHittet = true;
            }
        });
        this.level.enemies.forEach((object) => {
            this.throwableObjects.forEach(bottle => {
                if (bottle.isColliding(object) &&
                    !object.isHittet) {
                    this.hitEnemy(object);
                    object.isHittet = true;
                }
            });
        });
    }

    hitEnemy(enemy) {
        enemy.hit();
        setTimeout(() => {
            let deleteEnemy = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(deleteEnemy, 1);
        }, 1000);
    }

    bottleHitsEnemy(object, index, bottle) {
        if (bottle.isColliding(object) &&
            !object.isHittet) {
            return true
        }
    }

    checkCollision() {
        this.level.enemies.forEach(enemy => {
            if (this.enemyHitsCharacter(enemy)) {
                this.character.hit();
                this.StatusBarHealth.setPercentage(this.character.energy);
            }
            if (this.normalChickenHitsCharacter(enemy)) {
                this.character.hit();
                this.StatusBarHealth.setPercentage(this.character.energy);
            }
        });
    }

    getEnbossX() {
        for (let index = 0; index < this.level.enemies.length; index++) {
            let endboss = this.level.enemies[this.level.enemies.length - 1];
            return endboss.x;
        }
    }

    checkCollectableObjects() {
        this.level.objects.forEach((object, index) => {
            if (this.character.isColliding(object)) {
                this.level.objects.splice(index, 1);
                if (object instanceof Bottle1 || object instanceof Bottle2) {
                    this.character.collectBottle();
                    this.StatusBarBottles.setPercentage(this.character.bottle);
                }
                if (object instanceof Coin) {
                    this.character.collectCoin();
                    this.StatusBarCoins.setPercentage(this.character.coin);
                }
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

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

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

    normalChickenIsHittedFromTop(object) {
        return !(object instanceof Endboss) &&
            !(object instanceof SmallChicken) &&
            this.character.isColliding(object) &&
            this.character.speedY < 0 &&
            !object.isHittet
    }

    enemyHitsCharacter(enemy) {
        return this.character.isColliding(enemy) && !enemy.isHittet && (enemy instanceof SmallChicken || enemy instanceof Endboss)
    }

    normalChickenHitsCharacter(enemy) {
        return this.character.isColliding(enemy) && !this.character.isAboveGround()
    }
}