const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var grupoBorboletas;
var borboleta1Img;
var borboleta2Img;
var backgroundImg;
var score;



function preload(){
  backgroundImg = loadImage("backgroundImg.png");
  borboleta1Img = loadImage("borboletaRosa.png");
  borboleta2Img = loadImage("borboletaLaranja.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  player = new Player(windowWidth/2,windowHeight/2 + 100,400,600);
  player.scale = 0.03;
  
  grupoBorboletas = new Group();



}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  fill("white");
  textSize(45);
  text("SCORE :"+player.score,40,250);

  
  gerarBorboletas();

  player.display();
  drawSprites();
}

function gerarBorboletas(){
  if(frameCount % 80 == 0 ){

    
    var borboleta1 = createSprite(30, 70, 20,20);
    borboleta1.velocityX = +5; 

    var borboleta2 = createSprite(1300,150, 20,20);
    borboleta2.velocityX = -5;

    var rand = Math.round(random(1,1) );
    switch(rand){
      
      case 1 : 
        borboleta2.addImage(borboleta2Img);
        borboleta1.addImage(borboleta1Img);
      break

      
    }



    grupoBorboletas.add(borboleta1);

    grupoBorboletas.add(borboleta2);

  }
  
}