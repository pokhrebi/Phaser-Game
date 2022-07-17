window.onload = function() {
    var config = {
        width:256,
        height: 270,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2],
        pixelArt: true,
    }
    var game = new Phaser.Game(config);
}