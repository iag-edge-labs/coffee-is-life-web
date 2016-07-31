import { TimelineLite } from 'gsap'

export default class ZombieEnemy {
  constructor() {
    this.setup();
  }

  setup() {
    const textureArr = [];

    for (let i = 0; i < 5; i ++) {
      textureArr.push(PIXI.Texture.fromImage('/images/encounter/zombie_punk_sprite0' + (i + 1) + '.png'));
      textureArr[i].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }

    const zombie = new PIXI.extras.MovieClip(textureArr);
    zombie.anchor = new PIXI.Point(0.5, 0.5);
    zombie.x = 540;
    zombie.y = 450;
    zombie.scale = { x: 20, y: 20 };
    zombie.animationSpeed = 0.3;
    zombie.play();

    this.obj = zombie;

    const tl = new TimelineLite();
    this.randomTween(tl);
  }

  update() {

  }

  randomTween(tl) {
    setTimeout(() => {
      tl.to(this.obj, 0.8, {
        x: Math.random() * 500,
        onComplete: () => this.randomTween(tl)
      })
    }, Math.random() * 1000);
  }
}
