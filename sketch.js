//declare variables
var groundPos_y;

//variables for the tree



function setup() 
{
    createCanvas(512,512);
    
    //initialise variables
    
    groundPos_y = 400;

    tree = {pos_x: 236, trunkHeight: 90, radius: 100, trunkWidth: 20};
    
}

function draw()
{
    background(150,150,255);
    
    //sun
    noStroke();
    fill(255,150,0);
    ellipse(430,150,100,100);
    
    //tree
    stroke(0);
    //trunk
    fill(180,80,0);
    ellipse(
        tree.pos_x,
        groundPos_y - tree.trunkHeight/2 + 10,
        tree.trunkWidth,
        tree.trunkHeight);
    //leaves
    fill(0,150,0);
    ellipse(
        tree.pos_x,
        groundPos_y - tree.trunkHeight,
        tree.radius,
        tree.radius);
    
    //cloud
    noStroke();
    fill(255);
    ellipse(100,50,50,50);
    ellipse(130,50,30,30);
    ellipse(150,50,20,20);
    
    //ground
    fill(200,130,0);
    rect(0,groundPos_y,width,112);
    

}


