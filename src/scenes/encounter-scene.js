import ZombieEnemy  from './encounter/ZombieEnemy'
import Weapon from './encounter/Weapon'

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

  setup() {
    this._enemy = new ZombieEnemy();
    this._weapon = new Weapon();

    this.addChild(this._enemy.obj);
    this.addChild(this._weapon.obj);
  }

  update() {
    this._weapon.update();
    this._enemy.update();
  }

  destroy() {
    this.removeChild(this._enemy);
    this.removeChild(this._weapon);
  }
}
