import { Scene } from '../render'
import EncounterScene from './encounter-scene'
import MapScene from './map-scene'
import ChooseScene from './choose-scene'


export default class MainMenuScene extends PIXI.Graphics {

  constructor() {
    super();
    this._playButton = null;
    this.startScreen();
  }

  playButton () {
    this._playButton = new PIXI.Sprite.fromImage('images/game/play-game-btn.png');
    this._playButton.anchor = new PIXI.Point(0.5, 0.5);
    this._playButton.position.x = 540;
    this._playButton.position.y = 960;
    this._playButton.interactive = true;
    this._playButton.touchstart = this._playButton.mousedown = this.handlePlayButtonPressed.bind(this);
    this.addChild(this._playButton);
  }

  startScreen () {
    this._startScreen = new PIXI.Sprite.fromImage('images/game/ss.png');
    this.addChild(this._startScreen);
    this._startScreen.interactive = true;
    this._startScreen.touchstart = this._startScreen.mousedown = this.handlePlayButtonPressed.bind(this);
  }

  update() {}

  handlePlayButtonPressed(event) {
    Scene.requestSceneChange(ChooseScene);
  }


  destroy() {
    this.removeChild(this._playButton);
    this._playButton = null;
  }
}
