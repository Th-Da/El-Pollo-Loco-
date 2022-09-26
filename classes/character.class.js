class Character extends MovableObject {

    y = 190;
    x = 100;
    width = 160;
    height = 260;

    speed = 10;
    energy = 100;
    ground = 190;

    bottle = 0;
    coin = 0;

    offset = {
        top: 90,
        bottom: 100,
        left: 15,
        right: 40
    }

    IMAGES_IDLE = [
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-2.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-3.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-4.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-5.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-6.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-7.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-8.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-9.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ]

    IMAGES_WALKING = [
        'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-32.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
        'img_pollo_locco/img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'img_pollo_locco/img/2_character_pepe/5_dead/D-51.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-52.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-53.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-54.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-55.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-56.png',
        'img_pollo_locco/img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png',
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png',
        'img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png'
    ];

    world;
    walking_sound = new Audio('audio/walking.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');
    isHittet = false;

    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setStobbableInterval(() => this.moveCharacter(), 1000 / 60);
        setStobbableInterval(() => this.playCharacter(), 160);
    }

    moveCharacter() {
        this.walking_sound.playbackRate = 2.5;
        this.walking_sound.pause();
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveLeft())
            this.moveLeft();
        if (this.canJump()) {
            this.jump();
        }
        this.backgroundCanMove();
    }

    playCharacter() {
        if (this.characterIsDead())
            this.playDead();
        else if (this.isHurt())
            this.playHurt();
        else if (this.isAboveGround())
            this.playJump();
        else if (this.isWalking())
            this.playAnimation(this.IMAGES_WALKING);
        else
            this.playAnimation(this.IMAGES_IDLE);

    }

    canMoveRight() {
        return this.world.keyboard.RIGHT
    }

    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
    }

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > 0
    }

    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
    }

    canJump() {
        return this.world.keyboard.UP && !this.isAboveGround()
    }

    backgroundCanMove() {
        this.world.camera_x = -this.x + 100;
    }

    characterIsDead() {
        return this.isDead()/*  || this.x - 100 > this.getEndbossPositionX() */
    }

    playHurt() {
        this.playAnimation(this.IMAGES_HURT);
        this.hurt_sound.volume = 0.1;
        this.hurt_sound.play();
    }

    playJump() {
        this.playAnimation(this.IMAGES_JUMPING);
        this.jumping_sound.volume = 0.5;
        this.jumping_sound.play();
    }

    isWalking() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT
    }
    playDead() {

        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            gameOverScreen();
            this.world.backgroundMusic.pause();
        }, 1000);
    }

    collectCoin() {
        this.coin += 10;
    }
    collectBottle() {
        this.bottle += 20;
    }
}