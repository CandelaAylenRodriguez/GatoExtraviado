class scene3 extends Phaser.Scene {
  constructor() {
    super("nivel2");
  }
  
  create() 
{
    nivel=2
  this.add.image(400, 300, 'fondo2');
  this.add.image(400,300, "arbolesn2");

  platforms = this.physics.add.staticGroup(); /*grupo con fisicas estatica*/
  platforms.create(400, 590, "tierra2")
  platforms.create(100,130, "tierra3")
  platforms.create(300,130, "tierra3")
  platforms.create(660,135, "tierra3")
  platforms.create(451,245, "tierra1")
  platforms.create(245,245, "tierra1")
  platforms.create(56,245, "tierra1")
  platforms.create(651,245, "tierra1")
  platforms.create(100,350, "tierra3")
  platforms.create(300,460, "tierra1")
  platforms.create(550,400, "tierra3")
  platforms.create(755,480, "tierra1")
  platforms.create(785,325, "tierra1")
  platforms.create(5,480, "tierra1")
  platforms.create(480,510, "tierra1")

  sonidollaves=this.sound.add('llaves')

  gato = this.physics.add.sprite(765, 515, 'gato'); /*fisicas del personaje*/
        gato.setBounce(0);
        gato.setCollideWorldBounds(true);
        gato.setScale(0.12);
  
  player = this.physics.add.sprite(20, 30, 'niña'); /*fisicas del personaje*/
        player.setBounce(0);
        player.setCollideWorldBounds(true);
        player.setScale(0.5);

        caja = this.physics.add.staticGroup();
        caja.create(765, 536, "caja");

        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }

        velas = this.physics.add.group({ /*grupo de objetos*/
            key: 'vela',
            repeat: 9,
            setXY: { x: 12, y: 0}
        });

        //modificar aleatoriedad
        velas.children.iterate(function (child) //recorrer el grupo de hijos para cambiarsus valores
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); //rebote aleatorio a cada vela
            child.setX(Phaser.Math.FloatBetween(100, 700)); //posicion aleatoria en x
            child.setY(Phaser.Math.FloatBetween(10, 495)); //posicion aleatoria en y
        });

        peces = this.physics.add.group({
            key: 'pez',
            repeat: 9,
            setXY: { x: 15, y: 250,  }
        });

        peces.children.iterate(function (child) 
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); //rebote aleatorio a cada vela
            child.setX(Phaser.Math.FloatBetween(100, 700)); //posicion aleatoria en x
            child.setY(Phaser.Math.FloatBetween(10, 480));
        });

        llaves = this.physics.add.group({
            key: 'llave',
            repeat: 7,
            setXY: { x: 15, y: 400,}
            
        });

        llaves.children.iterate(function (child) 
        {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); //rebote aleatorio a cada vela
            child.setX(Phaser.Math.FloatBetween(100, 700)); //posicion aleatoria en x
            child.setY(Phaser.Math.FloatBetween(10, 490));
        });

       fantasmas = this.physics.add.group({allowGravity:false,immovable:true}); //grupo de fantasmas sin gravedad

        fantasma = fantasmas.create(200, 100, 'fanta1');

        //comportamiento fantasma
        this.tweens.add({
            targets: fantasma,
            props: {
                x: { value: 700, duration: 5000, },
                y: { value: 500, duration: 10000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
        
        fantasma1 = fantasmas.create(600, 550, 'fanta2');
      
        this.tweens.add({
            targets: fantasma1,
            props: {
                x: { value: 100, duration: 4000, },
                y: { value: 150, duration: 12000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        fantasma4 = fantasmas.create(400, 550, 'fanta2')

        this.tweens.add({
            targets: fantasma4,
            props: {
                x: { value: 400, duration: 10000, },
                y: { value: 20, duration: 4500,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
        
        fantasma3 = fantasmas.create(20, 300, 'fanta1')

        this.tweens.add({
            targets: fantasma3,
            props: {
                x: { value: 750, duration: 10000, },
                y: { value: 300, duration: 4500,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
        
        fantasmaFinal = this.physics.add.sprite(750, 550, 'fanta3');
        fantasmaFinal.setScale(0.4)
        fantasmaFinal.setBounce(0.2);
        fantasmaFinal.setCollideWorldBounds(true);
       
        gameOver = false;
        score = 0;
        scoreText = this.add.text(649, 16,  "Puntos: 0 ", { font: '20px Arial Black', fill: '#FF0000', });

        tiempo = 15
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        tiempotext = this.add.text(300, 16, 'Tiempo: ', { font: '20px Arial Black', fill: '#FF0000', });

        this.add.image(20,20,"vida")
        vidas= 3
        vidaText = this.add.text(40, 16,  "3", { font: '20px Arial Black', fill: '#FF0000', });

        this.add.image(110,20,"vela").setScale(2)
        velatext= this.add.text(122, 16, "1 = 10seg",{ font: '20px Arial Black', fill: '#FF0000', });

        contllaves=0
        this.add.image(500,25,"llave").setScale(1.7)
        llavetext= this.add.text(525, 16, "0/8",{ font: '20px Arial Black', fill: '#FF0000', });

        this.physics.add.collider(player, platforms); /*para que colicionen*/
        this.physics.add.collider(velas, platforms);
        this.physics.add.collider(peces, platforms);
        this.physics.add.collider(llaves, platforms);
        this.physics.add.collider(gato, platforms);
        this.physics.add.collider(caja, platforms);
    
        this.physics.add.overlap(player, velas, this.collectvela, null, this); /*¿metodo?*/
        this.physics.add.overlap(player, peces, this.collectpez, null, this);
        this.physics.add.collider(player, fantasmas, this.hitBomb, null, this);
        this.physics.add.collider(player, fantasmaFinal, this.hitBomb, null, this);
        this.physics.add.overlap(player, llaves, this.collectllave, null, this);
        this.physics.add.collider(player,caja , this.tocarcaja,null,this);
        this.physics.add.collider(player,gato , this.ganar,null,this);
        this.physics.add.collider(velas,velas , this.desplobj,null,this);
        this.physics.add.collider(velas,peces , this.desplobj,null,this);
        this.physics.add.collider(velas,llaves , this.desplobj,null,this);
        this.physics.add.collider(peces, llaves , this.desplobj,null,this);
        this.physics.add.collider(peces, peces , this.desplobj,null,this);
        this.physics.add.collider(llaves, llaves , this.desplobj,null,this);

        

}

    update  () {
    
    if (gameOver==true)
        {       
            return
        }
        
        if ( gameOver == false) {
            if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
            player.anims.play('left', true);  
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
            player.anims.play('right', true);
        }
        else 
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down){
            player.setVelocityY(-330);
        }
        }
    ///comportamiento fantasmafinal
        this.physics.moveToObject(fantasmaFinal,player, 80);
    
    
}

    collectvela (player, vela) //funcion - siempre fuera del update-create-preload
    {
        vela.disableBody(true, true);
        score += 100;
        scoreText.setText('Puntos: ' + score)
        tiempo= tiempo + 10;
    }

    collectllave (player, llave)
    {
        llave.disableBody(true, true);
        contllaves= contllaves + 1
        score += 300;
        scoreText.setText('Score: ' + score);
        llavetext.setText(contllaves + "/8")
        sonidollaves.play();
    };

    collectpez (player, pez)
            {
                pez.disableBody(true, true);
                score += 200;
                scoreText.setText('Score: ' + score);
            };

    hitBomb (player, fantasma)
    {
        if (vidas>=1 && gameOver == false)
        {
        vidas= vidas-1;
        vidaText.setText(""+ vidas); 
        player.x = 20
        player.y = 30
        }
        else
        {
      
            gameOver = true;
            player.anims.play('muerto', true); 
            player.setVelocityX(0);
            setTimeout(() => {
                this.gameOver()
              }, 3000);
        }
    }

    tocarcaja() {        
        if (contllaves==8) {
            caja.children.iterate(function (child) //recorrer el grupo de hijos para cambiarsus valores
            {
                child.disableBody(true,true)
            });
        }
    }
    
    gameOver() {        
        gameOver = true;
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');        
        if (gameOver=true)
        {
            this.scene.start('gameover'); 
        }
    }

    onSecond() {
        if (! gameOver)
        {       
            tiempo = tiempo - 1; 
            tiempotext.setText('Tiempo: ' + tiempo);
            if (tiempo == 0) {
                timedEvent.paused = true;
                this.gameOver()
            }            
        }
    }

    desplobj(obj1, obj2) {
        obj1.setX(obj1.x + 10);
        obj2.setX(obj2.x - 10);
    }

    ganar(){
        fin="fin"
        this.scene.start('gameover');
    }
}

