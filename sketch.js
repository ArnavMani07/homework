var ship1, ship2, ship3, ship4

var sea

function preload(){
ship1 = loadAnimation("ship-1.png")
ship2 = loadAnimation("ship-2.png")
ship3 = loadAnimation("ship-3.png")
ship4 = loadAnimation("ship-4.png")

sea = loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea.addImage(seaImg)
  
}

function draw() {
  background("blue");
 drawSprites()
}