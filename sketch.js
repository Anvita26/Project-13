var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf ;
var apple_img , leaf_img ;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png");
  leaf_img = loadImage("orangeLeaf.png") ;
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX ;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnLeaves();
  spawnApples();
  drawSprites();
}

function spawnApples(){

if(frameCount % 80 === 0 ){
  apple = createSprite(200,0);
  apple.velocityY = 6 ;
  apple.addImage("apple", apple_img);
  apple.scale = 0.05 ;
  apple.depth = rabbit.depth ;
  apple.depth = apple.depth + 1 ;
  apple.x = Math.round(random(50 , 350));
  apple.lifetime=70;
}

}

function spawnLeaves(){
  if(frameCount % 80 === 0){
  leaf = createSprite ( 200,0 ) ;
  leaf.velocityY = 8 ; 
  leaf.addImage("leaf" , leaf_img);
  leaf.scale = 0.05 ;
  leaf.depth = rabbit.depth ;
  leaf.depth = leaf.depth + 1 ;
  leaf.x = Math.round(random(50,350));
  leaf.lifetime = 60;
 } 
}

