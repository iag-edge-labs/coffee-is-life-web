import { Stage } from '../render'

export default class SceneController {

  constructor(Scene) {
    this._currentScene = new Scene();
    this._previousScene = null;

    Stage.addChild(this._currentScene);
  }

  update(){
    this._currentScene.update();
  }

  requestSceneChange(Scene){
    if (this._currentScene !== null) {
      this._previousScene = this._currentScene;
      this._previousScene.destroy();
      Stage.removeChild(this._previousScene);
    }

    this._currentScene = new Scene();
    Stage.addChild(this._currentScene);
  }
}
