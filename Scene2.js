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
}