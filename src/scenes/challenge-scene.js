import { Scene } from '../render'
import MapScene from './map-scene'

export default class ChallengeScreen extends PIXI.Graphics {

  constructor () {
    super();
    this._container = new PIXI.Container(); 
    this._scroll = new PIXI.Sprite.fromImage('images/game/scroll.png');
    this._container.addChild(this._scroll);
    this._scroll.x = 180;
    this._scroll.y = 600;
    this._scroll.interactive = true;
    this._scroll.scale = new PIXI.Point(10, 10);
    this._scroll.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this._scroll.touchstart = this._scroll.mousedown = this.handleScrollPressed.bind(this);
    this._border = this.createBorder();
    this._container.addChild(this._border);

    this._titleText = this.createTitle("Hello World")
    this._container.addChild(this._titleText);
    this.addChild(this._container);
  }
  
  handleScrollPressed () {
    Scene.requestSceneChange(MapScene);
  }

  createTitle (copy) {
    const text = new PIXI.Text(
      copy,
      {font : '24px Arial', fill : 0xff1010, align : 'center'}
    );
    return text;
  }

  createBorder () {
    const border = new PIXI.Sprite.fromImage('images/game/screenborder.png');
    border.scale = new PIXI.Point(10, 10);
    border.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    return border;
  }

  update () {}
}
