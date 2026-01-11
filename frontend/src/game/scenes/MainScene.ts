import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  private player?: Phaser.GameObjects.Rectangle;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private scoreText?: Phaser.GameObjects.Text;
  private score: number = 0;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // Preload assets here
    // Example: this.load.image('player', 'assets/player.png');
  }

  create() {
    // Create a simple pixel-art style background
    const graphics = this.add.graphics();
    graphics.fillGradientStyle(0x87ceeb, 0x87ceeb, 0x90ee90, 0x90ee90, 1);
    graphics.fillRect(0, 0, this.scale.width, this.scale.height);

    // Create ground
    const ground = this.add.rectangle(
      this.scale.width / 2,
      this.scale.height - 30,
      this.scale.width,
      60,
      0x8b7355
    );
    this.physics.add.existing(ground, true);

    // Create player (simple rectangle for now)
    this.player = this.add.rectangle(100, 100, 32, 32, 0xff6b6b);
    this.physics.add.existing(this.player);
    const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
    playerBody.setCollideWorldBounds(true);
    playerBody.setGravityY(300);

    // Add collision between player and ground
    this.physics.add.collider(this.player, ground);

    // Create UI text
    this.scoreText = this.add.text(16, 16, 'XP: 0', {
      fontSize: '24px',
      color: '#ffffff',
      fontFamily: 'Press Start 2P',
      stroke: '#000000',
      strokeThickness: 4,
    });
    this.scoreText.setScrollFactor(0);

    this.add.text(
      this.scale.width / 2,
      50,
      'Pixel Quest Planner',
      {
        fontSize: '32px',
        color: '#ffffff',
        fontFamily: 'Press Start 2P',
        stroke: '#000000',
        strokeThickness: 4,
      }
    ).setOrigin(0.5);

    // Setup keyboard controls
    this.cursors = this.input.keyboard?.createCursorKeys();

    // Instructions
    this.add.text(
      16,
      this.scale.height - 40,
      'Use Arrow Keys to Move',
      {
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: 'Arial',
      }
    );
  }

  update() {
    if (!this.player || !this.cursors) return;

    const playerBody = this.player.body as Phaser.Physics.Arcade.Body;

    // Handle player movement
    if (this.cursors.left.isDown) {
      playerBody.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      playerBody.setVelocityX(160);
    } else {
      playerBody.setVelocityX(0);
    }

    // Jump
    if (this.cursors.up.isDown && playerBody.touching.down) {
      playerBody.setVelocityY(-330);
    }
  }

  addXP(amount: number) {
    this.score += amount;
    this.scoreText?.setText(`XP: ${this.score}`);
  }
}
