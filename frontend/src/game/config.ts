import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: Number(import.meta.env.VITE_GAME_WIDTH) || 1280,
  height: Number(import.meta.env.VITE_GAME_HEIGHT) || 720,
  backgroundColor: '#87CEEB',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
    },
  },
  scene: [MainScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
};

export const initGame = (): Phaser.Game => {
  return new Phaser.Game(gameConfig);
};
