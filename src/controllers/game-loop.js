import { Renderer, Scene, Stage } from '../render'

function GameLoopController() {
    this._isGameActive = false;
    this._fps = 60;
    this._updateInterval = null;
}

GameLoopController.prototype.update = function() {
    if (!this._isGameActive) {
        return;
    }

    Renderer.render(Stage);
    Scene.update();
}

GameLoopController.prototype.start = function() {
    if (this._isGameActive) {
        return;
    }

    this._isGameActive = true;

    // Create the game loop
    this._updateInterval = setInterval(function() {
        this.update();
    }.bind(this), 1000 / this._fps);
};

GameLoopController.prototype.pause = function() {
    if (!this._isGameActive) {
        return;
    }

    clearInterval(this._updateInterval);
    this._isGameActive = false;
};

Object.defineProperty(GameLoopController.prototype, 'isPaused', {
    get: function() {
        return !this._isGameActive;
    },
});

export default GameLoopController;
