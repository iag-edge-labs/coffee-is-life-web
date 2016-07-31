import { getPlayerHealth, getZombieHealth } from './../../state'

export default class LifeBar {

  constructor () {
    //  const currentPlayerHealth = getPlayerHealth();
    const container = new PIXI.Container();
    const graphics = new PIXI.Graphics();
    //draw healthbar
    const healthbar = new PIXI.Sprite.fromImage('/images/game/healthbar.png');
    healthbar.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    healthbar.x = 80;
    healthbar.y = 0;
    //healthbar.cropEnabled = true;
    //healthbar.crop.width = (100) * healthbar.width;
    //healthbar.width = healthbar.width + (1000 * healthbar.maxWidth);
    healthbar.scale = { x: 8, y: 8 }
    healthbar.interactive = true;
    //draw healthicon
    const healthbar_you = new PIXI.Sprite.fromImage('/images/game/healthicon_you.png');
    healthbar_you.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    healthbar_you.x = 5;
    healthbar_you.y = 0;
    healthbar_you.scale = { x: 8, y: 8 }
    //draw ZombieIcon
    //const healthbar_Zombie_icon = new PIXI.Sprite.fromImage('/images/game/healthicon_Zombie.png');
    //healthbar_Zombie_icon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    //healthbar_Zombie_icon.x = 5;
    //healthbar_Zombie_icon.y = 30;
    //healthbar_Zombie_icon.scale = { x: 8, y: 8 }
    //draw healthbar
    const healthbar_Zombie = new PIXI.Sprite.fromImage('/images/game/healthbar.png');
    healthbar_Zombie.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    healthbar_Zombie.x = 80;
    healthbar_Zombie.y = 30;
    //healthbar_Zombie.width = healthbar_Zombie.width + (1000 * healthbar_Zombie.maxWidth);
    healthbar_Zombie.scale = { x: 8, y: 8 }
    healthbar_Zombie.interactive = true;

    container.addChild(healthbar_you);
    container.addChild(healthbar);
    //container.addChild(healthbar_Zombie_icon);
    //container.addChild(healthbar_Zombie);
    const currentPlayerHealth = getPlayerHealth();
    const currentZombieHealth = getZombieHealth();

    //draw rect for healthbar_you
    const howManyRect = 670 - ( 670 * ( currentPlayerHealth/ 100));
    graphics.beginFill(0x000000);
    const rect = graphics.drawRect(670 - howManyRect, 0, 50 + howManyRect , 50);
    graphics.endFill();
    if (this.currentValue < 100) {
      container.addChild(rect);
    } else {
      container.removeChild(rect);
    }

    //draw rect for healthbar_Zombie
    const howManyRect_Zombie = 670 - ( 670 * ( currentZombieHealth/ 100));
    graphics.beginFill(0x000000);
    const rect_Zombie = graphics.drawRect(670 - howManyRect_Zombie, 0, 50 + howManyRect_Zombie , 50);
    graphics.endFill();
    if (this.currentValue < 100) {
      container.addChild(rect_Zombie);
    } else {
      container.removeChild(rect_Zombie);
    }


    this.obj = container;
  }


  update () {

  }

  setValue (value) {
    this.currentValue = value;
  }
}
