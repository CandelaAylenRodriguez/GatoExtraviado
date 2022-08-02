var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
        width:800, //1920///ancho de la pantalla.
        height:600, //1080///alto de la pantalla.
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
   scene: [scene1, scene2, scene3, scene4, scene5]
   
};

var game = new Phaser.Game(config);

var velatext;
var pasarnivel;
var gato;
var contllaves;
var score;
var gameOver;
var player;
var velas;
var fantasmas;
var fantasma1;
var fantasma4;
var fantasma3;
var llaves;
var cursors;
var scoreText;
var timedEvent;
var tiempo;
var tiempotext;
var play;
var vela;
var playtexto;
var llave;
var fantasma;
var platforms;
var background;
var fantasma2;
var fantasmaFinal;
var vida;
var vidas;
var pez;
var peces;
var vidaText;
var credtexto;
var creditos;
var panelText;
var panelText1;
var menu;
var menutext;
var nivel=1;
var caja;
var llavetext;
var compfanta1;
var ganatext;
var gana;
var puntajefinal;
var fin;
var restartboton;
var restartButton;
var delayedCall;
var btnSonido;
var sonidollaves;
var sonidoganar;
var sonidoperder;
