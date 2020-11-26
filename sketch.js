//Create variables here

var dogImg , happyDogImg , database , foodS , foodStock , dog;

function preload()
{
  //load images here
  
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value" , readStock);
  
  dog = createSprite(250 , 300 , 50 , 50);
  dog.addImage("dogImage" , dogImg);
  dog.scale = 0.2;
  
}

function draw() {  
  background(46 , 139 , 87);

  //readStock(foodStock);

  if(keyDown (UP_ARROW)){

    writeStock(foodS);
    dog.addImage("img", happyDogImg);
  
  }

  drawSprites();
  //add styles here

  stroke(0);
  fill("white");
  text("Food Remaining :"+foodS , 200 , 200);

  text("Note : Press UP_ARROW Key To Feed Drago Milk" , 150 , 50)

}

function readStock(data){

  foodS = data.val();

}

function writeStock(x){

  if(x<=0){

    x=0;

  }

  else{

    x=x-1;

  }

  database.ref('/').update({

    Food:x

  })

}