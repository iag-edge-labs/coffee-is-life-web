const parsePolyString = polyString => {
  console.log(polyString);
  return polyString;
}


PixiGame.MapScene = function() {
    PIXI.Graphics.call(this);

    this.setup();
};


PixiGame.MapScene.constructor = PixiGame.GameScene;
PixiGame.MapScene.prototype = Object.create(PIXI.Graphics.prototype);

PixiGame.MapScene.prototype.setup = function() {
  var url = "https://data.melbourne.vic.gov.au/api/views/4zfn-ezbh/rows.json?accessType=DOWNLOAD";
  var loader = PIXI.loader;
  loader.add('roadData', url);
  loader.once('complete', function (event, resource) {
    var roadShapes = resource.roadData.data.data.map(road => {
      return parsePolyString(road[8])
    });
    
  });

  loader.load();
}

PixiGame.MapScene.prototype.update = function() {

  this._shape = new PIXI.Graphics();
  this._shape.beginFill(0xffffff);
  this._shape.drawPolygon([
    1,1,
    200,200,   
    30,300
  ])

  this._shape.endFill();
  this._shape.position.y = 20;
  this._shape.position.x = 20;
  this.addChild(this._shape);

}

PixiGame.MapScene.prototype.destroy = function() {
    this.removeChildren();
}
