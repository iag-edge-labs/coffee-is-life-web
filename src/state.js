let playerHealth = 100;
let playerBeans = 0;
let zombieHealth = 100;

export const playerHit = () => playerHealth = playerHealth - 10;
export const zombieHit = () => zombieHealth = zombieHealth - 10;
export const zombieDefeated = () => playerBeans = playerBeans + 1;
export const getPlayerHealth = () => playerHealth;
export const getZombieHealth = () => zombieHealth;
export const getPlayerBeans = () => playerBeans;
export const startEncounter = () => zombieHealth = 100;
