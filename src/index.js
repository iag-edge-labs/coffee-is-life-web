import PIXI from 'pixi'
import { Renderer } from './render'
import GameLoopController from './controllers/game-loop'

Renderer.view.setAttribute('class', 'renderer')
document.body.appendChild(Renderer.view)

const game = new GameLoopController();

game.start();
