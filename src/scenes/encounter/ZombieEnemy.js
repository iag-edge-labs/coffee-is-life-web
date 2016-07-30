function ZombieEnemy() {
  const textureArr = [];

  for (let i = 0; i < 5; i ++) {
    textureArr.push(PIXI.Texture.fromImage('/images/encounter/zombie_punk_sprite0' + (i + 1) + '.png'));
  }

  return new PIXI.extras.MovieClip(textureArr);
}

export default ZombieEnemy
