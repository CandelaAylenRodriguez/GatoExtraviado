class scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.image("fondo", ".//assets/Fondo.png")
      this.load.image("titulo", ".//assets/titulo.png")
      this.load.image("panel", ".//assets/panel.png")
      this.load.image("fondo2", ".//assets/Fondo2.png")
     this.load.image("arbol1", ".//assets/arbol1.png")
     this.load.image("arbol2",".//assets/arbol2.png")
     this.load.image("arbol3",".//assets/arbol3.png")
     this.load.image("gato",".//assets/gato.png")
     this.load.image("arbolesn",".//assets/Arboles noche.png")
     this.load.image("arbolesn2",".//assets/fondoarboles2.png")
     this.load.image("boton",".//assets/boton.png")
     this.load.image("fanta1",".//assets/fantasma1.png")
     this.load.image("fanta2",".//assets/fantasma2.png")
     this.load.image("fanta3",".//assets/fantasma3.png")
     this.load.image("llave",".//assets/llave.png")
     this.load.image("caja", ".//assets//caja.png")
     this.load.image("ojo",".//assets/ojo.png")
     this.load.image("pez",".//assets/pez.png")
     this.load.image("tierra1",".//assets/tierra1.png")
     this.load.image("tierra2",".//assets/tierra2.png")
     this.load.image("tierra3",".//assets/tierra3.png")
     this.load.image("tierra4",".//assets/tierra4.png")
     this.load.image("vela",".//assets/vela.png")
     this.load.image("vida",".//assets/vida.png")
     this.load.spritesheet('niña', './/assets/personaje.png', { frameWidth: 50, frameHeight: 100 });      
     this.load.audio('boton', './/assets/boton.mp3');
     this.load.audio('perder', './/assets/perder.mp3');
     this.load.audio('ganar', './/assets/ganar.mp3');
     this.load.audio('llaves', './/assets/llaves.mp3');

}
    create() 
    {
      btnSonido=this.sound.add('boton')

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('niña', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'niña', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('niña', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'muerto',
        frames: this.anims.generateFrameNumbers('niña', { start: 9, end: 12 }),
        frameRate: 3,
        repeat: 0
      });
 
      this.add.image(400, 300, 'fondo').setScale(1)
      this.add.image(100, 300, 'arbol1').setScale(1)
      this.add.image(400, 300, 'arbol1').setScale(1)
      this.add.image(700, 300, 'arbol1').setScale(1)
      this.add.image(400, 580, "tierra2")
      this.add.image(100, 515, "niña").setScale(1.1)
      this.add.image(765, 540, "gato").setScale(0.2)
      this.add.image(400, 350, 'titulo').setScale(1.2)

      play = this.add.image(266, 400, 'boton').setScale()
      playtexto = this.add.text(229, 385,  "JUGAR", { font: '25px Fixedsys', fill: '#FF0000', });
      play.setInteractive()
      play.on('pointerdown', () => btnSonido.play());
      play.on('pointerdown', () => this.scene.start('nivel1'));
      playtexto.setInteractive()
      playtexto.on("pointerdown", ()=> this.scene.start("nivel1"));
      playtexto.on('pointerdown', () => btnSonido.play());

      creditos = this.add.image(532, 400, 'boton').setScale()
      creditos.setInteractive()
      creditos.on('pointerdown', () => btnSonido.play());
      creditos.on('pointerdown', () => this.scene.start('creditos'));
      credtexto = this.add.text(470, 385,  "CREDITOS", { font: '25px Fixedsys', fill: '#FF0000', });
      credtexto.setInteractive()
      credtexto.on('pointerdown', () => btnSonido.play());
      credtexto.on("pointerdown", ()=> this.scene.start("creditos"));

      
    }
}

