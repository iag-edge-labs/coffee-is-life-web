let playerHealth = 100;
let playerBeans = 0;
let zombieHealth = 100;

export playerHit = () => playerHealth = playerHealth - 10;
export zombieHit = () => playerHealth = playerHealth - 10;
export zombieDefeated = () => playerBeans = playerBeans + 1;
export getPlayerHealth = () => playerHealth;
export getPlayerBeans = () => playerBeans;
export startEncounter = () => zombieHealth = 100;
