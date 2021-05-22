//Create variables here
var dog , happyDog;
var foodS,foodStock;
var d1 , d2;

function preload()
{
  d1 = loadImage("dogImg.png");
  d2 = loadImage("dogImg1.png");
	//load images here
}

function setup() {
  
  database = firebase.database();

	createCanvas(500, 500);

 dog = createSprite(250,250,50,50)
 dog.scale = 0.2
 dog.addImage(d1)


 foodStock = database.ref('food');
 foodStock.on("value",readStock)
}



function draw() {  
  background(25,50,20)
  if(keyWentDown(UP_ARROW)){
    
    writeStock(foodS)
    dog.addImage(d2)
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
 
  }


  function writeStock(x)
  {
  if(x <= 0){
  
    x =0
  }else{
  
    x= x-1
  }
    database.ref('/').update({
      food:x
    })
  }

