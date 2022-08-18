class EndScreen extends MovableObject {


    width = 720;
    height = 480;

    GAMEOVERSCREEN = ['img_pollo_locco/img/9_intro_outro_screens/game_over/game_over.png'];

    constructor() {
        super().loadImage(this.GAMEOVERSCREEN)
        this.y = 480 - this.height;

    }

}