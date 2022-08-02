class scene5 extends Phaser.Scene {
    constructor() {
      super('creditos');
    }

    
create() 
{
    this.add.image(400, 300, 'fondo').setScale(1)
    this.add.image(100, 300, 'arbol1').setScale(1)
    this.add.image(400, 300, 'arbol1').setScale(1)
    this.add.image(700, 300, 'arbol1').setScale(1)
    this.add.image(400, 580, "tierra2")
    this.add.image(100, 515, "niña").setScale(1.1)
    this.add.image(765, 540, "gato").setScale(0.2)
    this.add.image(400, 200, 'panel').setScale(1.2)

    btnSonido=this.sound.add('boton')

    panelText = this.add.text(335, 125,  "Creditos:", { font: '25px Arial Black', fill: '#FF0000', });
    panelText1 = this.add.text(227, 260,  "Candela Aylen Rodriguez", { font: '25px Arial Black', fill: '#FF0000', });

    menu = this.add.image(400, 400, 'boton')
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('inicio'));
    menu.on('pointerdown', () => btnSonido.play());
    menutext = this.add.text(360, 385,  "MENÚ", { font: '25px Arial Black', fill: '#FF0000', });
    menutext.setInteractive()
    menutext.on("pointerdown", ()=> this.scene.start("inicio"));
    menutext.on("pointerdown", ()=> btnSonido.play());


}
}
