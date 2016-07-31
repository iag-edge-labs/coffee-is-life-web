import { TimelineLite } from 'gsap'
import { hitPlayer, getZombieHealth } from '../../state'

export default class ZombieEnemy {
  constructor() {
    this.types = {
      punk: 6,
      hens: 4,
      footy: 6,
    };
    this.setup();
  }

  generateTextures(key, frames) {
    const textureArr = [];
    for (let i = 1; i <= frames; i ++) {
      const png = `/images/encounter/zombie_${key}_sprite0${i}.png`
      textureArr.push(PIXI.Texture.fromImage(png))
      textureArr[i - 1].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
    }
    return textureArr;
  }

  getRandomZombie(types) {
    const zombieTypes = Object.keys(types)
    //return zombieTypes[Math.floor(Math.random() * zombieTypes.length)]
    return 'hens'

  }

  setup() {
    const type = this.getRandomZombie(this.types);
    const zombie = new PIXI.extras.MovieClip(this.generateTextures(type, this.types[type]));
    zombie.anchor = new PIXI.Point(0.5, 0.5);
    zombie.x = 540;
    zombie.y = 900;
    zombie.scale = { x: 12, y: 12 };
    zombie.animationSpeed = 0.15;
    zombie.play();

    this.obj = zombie;

    const tl = new TimelineLite();
    this.randomTween(tl);

    this.queueAttack(tl);
  }

  queueAttack(tl) {
    setTimeout(() => {
      this.attackPlayer(tl);
      this.queueAttack(tl);
    }, 3000)
  }

  attackPlayer(tl) {
    if (getZombieHealth() > 0) {
      tl.kill(null, this.obj);
      tl.to(this.obj, 0.2, { y: 990 })
      .to(this.obj, 0.2, {
        y: 900,
        onComplete: () => this.randomTween(tl)
      })
    }
  }

  update() {

  }

  randomTween(tl) {
    const range = 800
    setTimeout(() => {
      tl.to(this.obj, 0.4, {
        x: (540 + range / 2) - Math.random() * range,
        onComplete: () => this.randomTween(tl)
      })
    }, Math.random() * 200);
  }
}
