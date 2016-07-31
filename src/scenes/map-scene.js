import EncounterScene from './encounter-scene'
import { Scene } from '../render'

export default class MapScene extends PIXI.Graphics {
  constructor () {
    super(); 
    this.addBorder();
    setTimeout(this.startEncounter.bind(this), 5000);
  }

  addBorder () {
    const border = new PIXI.Sprite.fromImage('images/game/screenborder.png');
    border.scale = new PIXI.Point(10, 10);
    border.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this.addChild(border);
  }

  update () {
    
  }

  startEncounter () {
    Scene.requestSceneChange(EncounterScene);
  }
}


