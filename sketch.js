var canvas;
var music;
var surface1, surface2, surface3, surface4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1= createSprite(93,562,180,25);
    surface1.shapeColor="blue";

    surface2= createSprite(293,562,180,25);
    surface2.shapeColor="orange";

    surface3= createSprite(498,562,180,25);
    surface3.shapeColor="pink";

    surface4= createSprite(706,562,180,25);
    surface4.shapeColor="green";

    box=createSprite(random(20,750),100,40,40);
    box.shapeColor="white";
    box.velocityY=3;
    box.velocityX=5;

    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

}

function draw() {
    background(rgb(169,169,169));

    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor="blue";
    }
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor="orange";
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor="pink";
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="green";
    }
    
    edges=createEdgeSprites();
    box.bounceOff(edges);


    drawSprites();



    //add condition to check if box touching surface and make it box
}
