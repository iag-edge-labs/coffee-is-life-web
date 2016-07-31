import ZombieEnemy  from './encounter/ZombieEnemy'
import Weapon from './encounter/Weapon'
import LifeBar from './encounter/LifeBar'

export default class EncounterScene extends PIXI.Graphics {

  constructor() {
    super();
    this.setup();

    this.state = {
      weapon: {
        moveDir: 1,
        moveSpeed: 0.8,
        isIdle: true,
        isFiring: false
      },
      enemy: {
        moveDir: 1,
        moveSpeed: 3.1,
      },
    }
  }

  addBorder () {
    const border = new PIXI.Sprite.fromImage('images/game/screenborder.png');
    border.scale = new PIXI.Point(10, 10);
    border.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this.addChild(border);
  }

  addBg () {
    const border = new PIXI.Sprite.fromImage('images/encounter/screen_encounterbg.png');
    border.scale = new PIXI.Point(10, 10);
    border.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    this.addChild(border);
  }

  setup() {
    this._enemy = new ZombieEnemy();
    this._weapon = new Weapon();
    this._lifeBar = new LifeBar();

    this.addBg();
    this.addChild(this._enemy.obj);
    this.addChild(this._weapon.obj);
    this.addChild(this._lifeBar.obj);
    this.addBorder();
  }

  update() {
    this._weapon.update();
    this._enemy.update();
    this._lifeBar.update();
  }

  destroy() {
    this.removeChild(this._enemy);
    this.removeChild(this._weapon);
    this.removeChild(this._lifeBar);
  }
}
