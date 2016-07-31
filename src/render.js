import SceneController from './controllers/scene'
import MainMenuScene from './scenes/main-menu-scene'
import EncounterScene from './scenes/encounter-scene'

export const Renderer = new PIXI.autoDetectRenderer(1080, 1920)
export const Stage = new PIXI.Container()
export const Scene = new SceneController(EncounterScene)

Renderer.backgroundColor = 0xffffff
