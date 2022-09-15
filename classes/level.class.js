class level {

    enemies;
    clouds;
    backgroundObjects;
    objects;
    level_end_x = 2500;

    constructor(objects, enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.objects = objects;
    }
}