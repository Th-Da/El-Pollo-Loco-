class World {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    camera_x = -100;
    StatusBarHealth = new StatusBarHealth();
    StatusBarBottles = new StatusBarBottles();
    throwableObjects = [];
    backgroundMusic = new Audio('audio/background-music.mp3');
    startscreen = 'img_pollo_locco/img/9_intro_outro_screens/start/startscreen_1.png'
    IMAGE_GAMEOVER = ['img_pollo_locco/img/9_intro_outro_screens/game_over/game_over.png']

    
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

    playBackgroundMusic() {
        this.backgroundMusic.volume = 0.1;
        this.backgroundMusic.play();
    }


    run() {
        setStobbableInterval(() => {
            this.checkCollision();
            this.createThrowableObjects();
            this.checkCollectableObjects();
            this.checkIfEnemyIsHit();
        }, 200);
    }

    createThrowableObjects() {
        if (this.keyboard.SPACE && this.character.bottle > 0) {
            this.throwableObjects.push(new ThrowableObject(this.character.x + 100, this.character.y + 100));
            this.character.bottle -= 20;
            this.StatusBarBottles.setPercentage(this.character.bottle);

        }
    }

    checkIfEnemyIsHit() {
        this.level.enemies.forEach(object => {
            this.throwableObjects.forEach(bottle => {
                    if (bottle.isColliding(object)) {
                        object.hit();
                    }
            });
        });
    }

    checkCollision() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.StatusBarHealth.setPercentage(this.character.energy);
            }

        });
    }

    checkCollectableObjects() {
        this.level.objects.forEach((object, index) => {
            if (this.character.isColliding(object)) {
                this.level.objects.splice(index, 1);
                if (object instanceof Bottle) {
                    this.character.collect();
                    this.StatusBarBottles.setPercentage(this.character.bottle);
                }
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.objects);
        this.addToMap(this.character);



        this.ctx.translate(-this.camera_x, 0); //Back
        this.addToMap(this.StatusBarHealth);
        this.addToMap(this.StatusBarBottles);
        this.ctx.translate(this.camera_x, 0); // Foreward
        try {
        this.ctx.translate(-this.camera_x, 0);
    } catch (e) {
        console.log('Error loading Image', e);
    }
        if (this.character.isDead) {
            
            this.addObjectsToMap(this.IMAGE_GAMEOVER);
        
        }




        // draw() wird immer wieder aufgerufen 
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
        mo.drawFrame(this.ctx);

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
}