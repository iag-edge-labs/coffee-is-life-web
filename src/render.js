import PIXI from 'pixi'
import SceneController from './controllers/scene'
import MainMenuScene from './scenes/main-menu-scene'
import EncounterScene from './scenes/encounter-scene'

console.log(PIXI);

export const Stage = new PIXI.Stage()
export const Renderer = new PIXI.autoDetectRenderer(640, 960)
export const Scene = new SceneController(EncounterScene);
