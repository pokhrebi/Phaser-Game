class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(0,0, "background");
        this.background.setOrigin(0,0);

        this.ship1 = this.add.image(256/2 - 50, 270/2, "ship")
        this.ship2 = this.add.image(256/2, 270/2, "ship2");
        this.ship3 = this.add.image(256/2 + 50, 270/2, "ship3");

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
    }
    resetShipPos(ship){
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, 256);
        ship.x = randomX;
    }
}