import { Scene } from '../render'
import EncounterScene from './encounter-scene'

export default class MainMenuScene extends PIXI.Graphics {

  constructor() {
    super();
    this._playButton = null;
    this.setup();
  }

  setup() {
    this._playButton = new PIXI.Sprite.fromImage('images/game/play-game-btn.png');
    this._playButton.anchor = new PIXI.Point(0.5, 0.5);
    this._playButton.position.x = 540;
    this._playButton.position.y = 960;
    this._playButton.interactive = true;
    this._playButton.touchstart = this._playButton.mousedown = this.handlePlayButtonPressed.bind(this);
    this.addChild(this._playButton);
  }

  update() {}

  handlePlayButtonPressed(event) {
    Scene.requestSceneChange(EncounterScene);
  }

  destroy() {
    this.removeChild(this._playButton);
    this._playButton = null;
  }
}
