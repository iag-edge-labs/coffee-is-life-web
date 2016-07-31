import { Scene } from '../render'
import ZombieEnemy  from './encounter/ZombieEnemy'
import Weapon from './encounter/Weapon'
import LifeBar from './encounter/LifeBar'
import { getZombieHealth, startEncounter } from '../state'
import MapScene from './map-scene'

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
    this._weapon.addEnemy(this._enemy.obj)
    this._lifeBar = new LifeBar();
    startEncounter()
    this._done = false
    this._lifeBar.obj.x = 200;
    this._lifeBar.obj.y = 100;

    this.addBg();
    this.addChild(this._enemy.obj);
    this.addChild(this._weapon.obj);
    this.addBorder();
    this.addChild(this._lifeBar.obj);
  }

  update() {
    this._weapon.update();
    this._enemy.update();
    this._lifeBar.update();

    if (getZombieHealth() <= 0 && !this._done) {
      Scene.requestSceneChange(MapScene)
    }
  }

  destroy() {
    this.removeChild(this._enemy);
    this.removeChild(this._weapon);
  }
}
