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

    this._titleText = this.createTitle()
    this._bodyText = this.createBody()
    this._titleText.y = 700;
    this._titleText.x = 230;

    this._bodyText.y = 1000;
    this._bodyText.x = 230;
    this._container.addChild(this._titleText);
    this._container.addChild(this._bodyText);
    this.addChild(this._container);
  }
  
  handleScrollPressed () {
    Scene.requestSceneChange(MapScene);
  }

  createTitle (copy) {
    const text = new PIXI.Text(
      this.getTitle(),
      {
        font : '50px "8BIT WONDER"', 
        fill : 0x000000, 
        align : 'left', 
        wordWrap : true, 
        wordWrapWidth : 600
      }
    );
    return text;
  }

  createBody () {
    const body = new PIXI.Text(
      this.getText(),
      {font : '30px "8BIT WONDER"', fill : 0x000000, align : 'left', wordWrap : true, wordWrapWidth : 600 }
    );
    body.wordWarp = true;
    body.wordWrapWidth = 10;
    return body;
  }

  createBorder () {
    const border = new PIXI.Sprite.fromImage('images/game/screenborder.png');
    border.scale = new PIXI.Point(10, 10);
    border.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    return border;
  }

  getTitle () {
    return "Businessmen who brought their own lunch"
  }

  getText () {
    return "This whimsical, life-size sculpture of three businessmen carrying lunchboxes is located in the heart of Melbourne. Artist Alison Weaver claims that while the men are named and motionless, they are also intended to be anonymous and to represent being 'trapped in the perpetual motion of consumerism'.";
  }

  update () {}
}
