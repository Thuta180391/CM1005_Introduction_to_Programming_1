//declare_variables
var treePos_x1
var treePos_x2
var treePos_x3
var treePos_x4
var treePos_x5
var treePos_x6
var treePos_x7
var treePos_x8
var treePos_x9
var treeScale
var cloudPos1_x
var cloudPos2_x
var cloudScale1
var cloudScale2;

function setup() 
{
    createCanvas(512,512);

    //initialize variables
    treePos_x1 = 200;
    treePos_x2 = 140;
    treePos_x3 = 170;
    treePos_x4 = 230;
    treePos_x5 = 260;
    treePos_x6 = 160;
    treePos_x7 = 240;
    treePos_x8 = 180;
    treePos_x9 = 220;
    treeScale = 1.0;
    cloudPos1_x = 220;
    cloudPos2_x = 20;
    cloudScale1 = 1.5;
    cloudScale2 = 0.2;
    
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
    fill(180,80,0);
    ellipse(treePos_x1,360,40 ,100 * treeScale);
    fill(0,150,0);
    ellipse(treePos_x1,300 , 120 , 120);
    ellipse(treePos_x2 * treeScale,300,50 * treeScale,50 * treeScale);
    ellipse(treePos_x3 * treeScale,260,50 * treeScale,50 * treeScale);
    ellipse(treePos_x1 * treeScale,230,50 * treeScale,50 * treeScale);
    ellipse(treePos_x4 * treeScale,260,50 * treeScale,50 * treeScale);
    ellipse(treePos_x5 * treeScale,290,50 * treeScale,50 * treeScale);
    ellipse(treePos_x6 * treeScale,340,50 * treeScale,50 * treeScale);
    ellipse(treePos_x7 * treeScale,335,50 * treeScale,50 * treeScale);
    ellipse(treePos_x1 * treeScale,340,50 * treeScale,50 * treeScale);
    ellipse(treePos_x8 * treeScale,300,50 * treeScale,50 * treeScale);
    ellipse(treePos_x9 * treeScale,300,50 * treeScale,50 * treeScale);
    ellipse(treePos_x1 * treeScale,280,50 * treeScale,50 * treeScale);
    
    
    
    //cloud
    noStroke();
    fill(255);
    ellipse(cloudPos1_x, //x_position
            50, //y_position
            50 * cloudScale1,
            50 * cloudScale1);
    ellipse(cloudPos1_x + 30 * cloudScale1,
            50,
            30 * cloudScale1,
            30 * cloudScale1);
    ellipse(cloudPos1_x + 50 * cloudScale1,
            50,
            20 * cloudScale1,
            20 * cloudScale1);
    ellipse(cloudPos2_x,
            50,
            50 * cloudScale2,
            50 * cloudScale2);
    ellipse(cloudPos2_x + 30 * cloudScale2,
            50,
            30 * cloudScale2,
            30 * cloudScale2);
    ellipse(cloudPos2_x + 50 * cloudScale2,
            50,
            20 * cloudScale2,
            20 * cloudScale2);

 
    
    //ground
    fill(200,130,0);
    rect(0,400,width,112);
    

}
