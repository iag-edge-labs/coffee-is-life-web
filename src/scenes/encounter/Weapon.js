import { TimelineLite } from 'gsap'
import { zombieHit, getPlayerHealth, getZombieHealth } from '../../state'

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

    this.obj = new PIXI.Container();

    const weapon = new PIXI.extras.MovieClip(texArr)
    weapon.anchor = new PIXI.Point(0.5, 0.5)
    weapon.x = 540
    weapon.y = 1790
    weapon.scale = { x: 7, y: 7 }
    weapon.interactive = true
    weapon.on('click', this.fireWeapon.bind(this))

    this._weapon = weapon
    this.obj.addChild(weapon)
  }

  splash() {
    const texArr = [];
    for(let i = 1; i <= 9; i ++) {
      const texture = new PIXI.Texture.fromImage(`/images/encounter/coffeethrow_anim0${i}.png`)
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
      texArr.push(texture)
    }
    const splash = new PIXI.extras.MovieClip(texArr)
    splash.anchor = new PIXI.Point(0.5, 0.5)
    splash.x = 555
    splash.y = 1020
    splash.scale = {x: 12, y: 12}
    splash.animationSpeed = 0.4
    splash.play()
    splash.loop = false
    splash.onComplete = () => this.obj.removeChild(splash)

    this.obj.addChild(splash)
  }

  addEnemy(sprite) {
    this._enemy = sprite
  }

  fireWeapon(zombie) {
    if (!this.state.isFiring && getZombieHealth() > 0) {
      zombieHit()
      this._enemy.tint = 0xff5555
      this.splash()
      this.state.isFiring = true
      this._weapon.gotoAndStop(1)

      const tl = new TimelineLite()
      setTimeout(() => this._enemy.tint = 0xffffff, 200)
      setTimeout(() => this._weapon.gotoAndStop(0), 200)
      tl.to(this._weapon, 0.1, { y: 1750 })
      .to(this._weapon, 0.5, { y: 1790, onComplete: () => {
        this.state.isFiring = false
      }});
    }
  }

  update(zombie) {

  }
}
