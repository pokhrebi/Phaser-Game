class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0,0, 256, 270, "background");
        this.background.setOrigin(0,0);

        this.ship1 = this.add.sprite(256/2 - 50, 270/2, "ship")
        this.ship2 = this.add.sprite(256/2, 270/2, "ship2");
        this.ship3 = this.add.sprite(256/2 + 50, 270/2, "ship3");

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        
        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.add.text(20, 20, "Playing Game", {
            font: "25px Arial",
             fill: "yellow"
        });


    }
    moveShip(ship, speed) {
        ship.y += speed;
        if (ship.y > 270) {
            this.resetShipPos(ship);
        }
    }
    update() {
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 3);

        this.background.tilePositionY -= 0.5;
    }
    resetShipPos(ship){
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, 256);
        ship.x = randomX;
    }
}