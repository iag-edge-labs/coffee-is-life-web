import { Renderer, Scene, Stage } from '../render'

export default class GameLoopController {
  constructor() {
    this._isGameActive = false;
    this._fps = 60;
    this._updateInterval = null;
  }

  start() {
    if (this._isGameActive) {
      return;
    }

    this._isGameActive = true;

    this._updateInterval = setInterval(function() {
      this.update();
    }.bind(this), 1000 / this._fps);

  }

  update() {
    if (!this._isGameActive) {
      return;
    }

    Renderer.render(Stage);
    Scene.update();
  }

  pause() {
    if (!this._isGameActive) {
      return;
    }

    clearInterval(this._updateInterval);
    this._isGameActive = false;
  }
}
