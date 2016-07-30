import PIXI from 'pixi'

GameScene = function() {
    PIXI.Graphics.call(this);
    this.setup();
};

GameScene.constructor = GameScene;

GameScene.prototype = Object.create(PIXI.Graphics.prototype);

GameScene.prototype.setup = function() {}

GameScene.prototype.update = function() {}

GameScene.prototype.destroy = function() {
    this.removeChildren();
}

export default GameScene;
