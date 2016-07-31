import { Scene } from '../render'
//import EncounterScene from './encounter-scene'
import MapScene from './map-scene'
import ChallengeScreen from './challenge-scene'

export default class ChooseScene extends PIXI.Graphics {

  constructor() {
    super();
    this.chooseScreen();
  }

  chooseScreen () {
    this._chooseScreen = new PIXI.Sprite.fromImage('images/game/cyoa.png');
    this.addChild(this._chooseScreen);
    this._chooseScreen.interactive = true;
    this._chooseScreen.touchstart = this._chooseScreen.mousedown = this.handlePlayButtonPressed.bind(this);
  }

  update() {

  }

  handlePlayButtonPressed(event) {
    //Scene.requestSceneChange(MapScene);
    Scene.requestSceneChange(ChallengeScreen);
  }


  destroy() {
    this.removeChild(this._playButton);
    this._playButton = null;
  }
}
