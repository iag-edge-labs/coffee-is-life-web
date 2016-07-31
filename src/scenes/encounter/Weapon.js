import { TimelineLite } from 'gsap'

export default class Weapon {

  constructor() {
    this.setup();

    this.state = {
      isFiring: false
    }
  }

  setup() {
    const texArr = [new PIXI.Texture.fromImage('/images/encounter/yourcoffee.png'), new PIXI.Texture.fromImage('/images/encounter/yourcoffee_flicked.png')]
    texArr.forEach(t => t.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST)

    const weapon = new PIXI.extras.MovieClip(texArr)
    weapon.anchor = new PIXI.Point(0.5, 0.5)
    weapon.x = 540
    weapon.y = 1790
    weapon.scale = { x: 7, y: 7 }
    weapon.interactive = true
    weapon.on('click', this.fireWeapon.bind(this))
    this.obj = weapon
  }

  fireWeapon() {
    if (!this.state.isFiring) {
      this.state.isFiring = true
      this.obj.gotoAndStop(1)

      const tl = new TimelineLite()
      setTimeout(() => this.obj.gotoAndStop(0), 200)
      tl.to(this.obj, 0.1, { y: 1750 })
      .to(this.obj, 0.5, { y: 1790, onComplete: () => this.state.isFiring = false });
    }
  }

  update() {

  }
}
