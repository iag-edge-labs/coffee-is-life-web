import { Stage } from '../render'

function SceneController (Scene) {

  this._currentScene = new Scene();
  this._previousScene = null;

  Stage.addChild(this._currentScene);
}

SceneController.prototype.update = function() {
  this._currentScene.update();
}

SceneController.prototype.requestSceneChange = function(Scene) {
  if (this._currentScene !== null) {
    this._previousScene = this._currentScene;
    this._previousScene.destroy();
    Stage.removeChild(this._previousScene);
  }

  this._currentScene = new Scene();
  PixiGame.stage.addChild(this._currentScene);
}

export default SceneController;
