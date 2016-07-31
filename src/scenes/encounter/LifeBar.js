export default class LifeBar {

  constructor () {
    const container = new PIXI.Container();
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xe74c3c);
    const rect = graphics.drawRect(100, 150, 50, 50);
    graphics.endFill();
    container.addChild(rect);
    this.obj = container;
  }

  update () {

  }

}
