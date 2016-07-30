import SceneController from './controllers/scene'
import MainMenuScene from './scenes/main-menu-scene'
import EncounterScene from './scenes/encounter-scene'

export const Stage = new PIXI.Container()
export const Renderer = new PIXI.autoDetectRenderer(640, 960)
export const Scene = new SceneController(EncounterScene);
