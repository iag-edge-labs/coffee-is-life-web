import ZombieEnemy  from './encounter/ZombieEnemy'
import Weapon from './encounter/Weapon'
import LifeBar from './encounter/LifeBar'
import { getPlayerHealth, getZombieHealth } from '../../../state'

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

    this._zombieLifeBar = new LifeBar();
    this._playerLifeBar = new LifeBar();
  }

  setup() {
    this._enemy = new ZombieEnemy();
    this._weapon = new Weapon();
    this._lifeBar = new LifeBar();

    this.addChild(this._enemy.obj);
    this.addChild(this._weapon.obj);
    console.log(this._lifeBar.obj);
    this.addChild(this._lifeBar.obj);
  }

  update() {
    this._weapon.update();
    this._enemy.update();
    this._lifeBar.update();

    this._playerLifeBar.setValue(getPlayerHealth())
    this._zombieLifeBar.setValue(getZombieHealth())
    this._playerLifeBar.update();
    this._zombieLifeBar.update();
  }

  destroy() {
    this.removeChild(this._enemy);
    this.removeChild(this._weapon);
    this.removeChild(this._lifeBar);
  }
}
