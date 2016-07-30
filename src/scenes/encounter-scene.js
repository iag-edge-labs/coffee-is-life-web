import ZombieEnemy  from './encounter/ZombieEnemy'
import Weapon from './encounter/Weapon'

export default class EncounterScene extends PIXI.Graphics {

  constructor() {
    super();

    PIXI.Graphics.call(this);
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
    this._enemy = ZombieEnemy();
    this._weapon = Weapon();

    this.addChild(this._enemy);
    this.addChild(this._weapon);
  }

  update() {

  }

  destroy() {
    this.removeChild(this._enemy);
    this.removeChild(this._weapon);
  }
}
