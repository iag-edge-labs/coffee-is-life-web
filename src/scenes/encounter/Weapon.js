import { TimelineLite } from 'gsap'

export default class Weapon {

  constructor() {
    this.setup();

    this.state = {
      isFiring: false
    }
  }

  setup() {
    const weapon = new PIXI.Sprite.fromImage('/images/encounter/coffee.png');
    weapon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    weapon.anchor = new PIXI.Point(0.5, 0.5);
    weapon.x = 540;
    weapon.y = 1700;
    weapon.scale = { x: 8, y: 8 }
    weapon.interactive = true;
    weapon.on('click', this.fireWeapon.bind(this));
    this.obj = weapon;
  }

  fireWeapon() {
    if (!this.state.isFiring) {
      this.state.isFiring = true

      const tl = new TimelineLite()

      tl.to(this.obj, 0.1, { y: 1940 })
      .to(this.obj, 1, { y: 1700, onComplete: () => this.state.isFiring = false });
    }
  }

  update() {

  }
}
