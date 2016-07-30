import PIXI from 'pixi'

function EncounterScene() {
    PIXI.Graphics.call(this);
    this.setup();
};

EncounterScene.prototype = Object.create(PIXI.Graphics.prototype);

var EncounterState = {
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

EncounterScene.prototype.setup = function() {
  this._enemy = EncounterSprite.Zombie();
  this._weapon = EncounterSprite.Weapon();

  this.addChild(this._enemy);
  this.addChild(this._weapon);
}

EncounterScene.prototype.update = function() {
  EncounterMethods.fireWeapon(this._weapon);
  EncounterMethods.idleWeapon(this._weapon);
  EncounterMethods.enemyMovement(this._enemy);
};

EncounterScene.prototype.destroy = function() {
    this.removeChildren();
}

export default EncounterScene;
