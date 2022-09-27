const level1 = new level(
    getCollectables(),
    getEnemies(),
    getClouds(),
    getBackgroundObjects()
);

function getCollectables() {
    const coins = getCoins();
    const bottles = getBottles();
    const collectables = coins.concat(bottles);
    return collectables;
}

function getCoins() {
    return [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}

function getBottles() {
    return [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ]
}

function getEnemies() {
    return [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new Endboss()
    ]
}

function getClouds() {
    return [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
    ]
}

function getBackgroundObjects() {
    return [
        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', -719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 0),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/2.png', 719 * 3),

        new BackgroundObject('img_pollo_locco/img/5_background/layers/air.png', 719 * 4),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/3_third_layer/1.png', 719 * 4),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/2_second_layer/1.png', 719 * 4),
        new BackgroundObject('img_pollo_locco/img/5_background/layers/1_first_layer/1.png', 719 * 4)
    ]
}