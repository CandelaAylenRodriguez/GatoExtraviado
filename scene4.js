class scene4 extends Phaser.Scene {
    constructor() {
      super("gameover");
    }
    
    create() {
      this.add.image(400, 300, 'fondo2');
      this.add.image(400, 250, 'panel');

      sonidoganar=this.sound.add('ganar');
      sonidoperder=this.sound.add('perder')
      btnSonido=this.sound.add('boton')

      puntajefinal = this.add.text(252, 232, "Puntos: " + score,  { fontFamily: 'Arial Black', fontSize: 30, color: '#FF0000' });
    
      if (fin=="fin") {
        sonidoganar.play();
        menu = this.add.image(400, 400, 'boton')
        menu.setInteractive()
        menu.on('pointerdown', () => this.scene.start('inicio'));
        menu.on('pointerdown', () => btnSonido.play());
        menutext = this.add.text(360, 385,  "MENÚ", { font: '25px Arial Black', fill: '#FF0000', });
        menutext.setInteractive()
        menutext.on("pointerdown", ()=> this.scene.start("inicio"));
        menutext.on("pointerdown", ()=> btnSonido.play());
        ganatext = this.add.text(330, 160,  "¡GANASTE!", { font: '25px Arial Black', fill: '#FF0000', });
      }
      else {
        sonidoperder.play();
        ganatext = this.add.text(330, 160,  "PERDISTE :(", { font: '25px Arial Black', fill: '#FF0000', });
        restartboton = this.add.image(400, 400, 'boton')
        restartboton.setInteractive()
        if (nivel==1) {
          restartboton.on('pointerdown', () => this.scene.start('nivel1'));
          restartboton.on('pointerdown', () => btnSonido.play());
        }
        if (nivel==2)
        {
          restartboton.on('pointerdown', () => btnSonido.play());
          restartboton.on('pointerdown', () => this.scene.start('nivel2'));
        }
        
        restartButton = this.add.text(325, 385,  "Reintentar", { font: '25px Arial Black', fill: '#FF0000', });
        restartButton.setInteractive();
        if (nivel==1) {
          restartButton.on('pointerdown', () => this.scene.start('nivel1'));
          restartButton.on('pointerdown', () => btnSonido.play());
        }
        if (nivel==2)
        {
          restartButton.on('pointerdown', () => this.scene.start('nivel2'));
          restartButton.on('pointerdown', () => btnSonido.play());
        }
      }
    }
   
}