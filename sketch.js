/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

	canyon = {x_pos: 10, width: 100};

	//mountain = {x_pos: 250, width: 250, y_pos: 220};

	mountain_x = width/2;
	mountain_y = height/2;

	collectable = {x_pos: 100, y_pos: 250, size: 30};

	cloud = {x_pos: 200, y_pos: 150, size: 80};

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
	
	//Cloud
	fill(255,255,255);
	ellipse(cloud.x_pos + 15, cloud.y_pos, cloud.size);
	ellipse(cloud.x_pos-25, cloud.y_pos, cloud.size -20);
	ellipse(cloud.x_pos + 55, cloud.y_pos, cloud.size - 20);

	//Mountain
	fill(153,153,153);
	triangle(mountain_x - 272, mountain_y + 144, mountain_x -92, mountain_y + 144, mountain_x - 182, mountain_y +12);
	triangle(mountain_x - 312, mountain_y + 144, mountain_x - 182, mountain_y + 144, mountain_x - 232, mountain_y + 37);
	triangle(mountain_x - 182, mountain_y + 144, mountain_x - 52, mountain_y + 144, mountain_x - 132, mountain_y + 37);

	//Canyon
	fill(100,155,255)
	rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y, 20);

	//Treetrunk
	fill(120, 100, 40);
	rect(treePos_x, treePos_y, 60, 150);
	//Treebranches
	fill(0, 155, 0);
	triangle(treePos_x - 50, treePos_y + 50, treePos_x + 30, treePos_y - 50, treePos_x + 110, treePos_y + 50);
	triangle(treePos_x - 50, treePos_y, treePos_x + 30, treePos_y - 100, treePos_x + 110, treePos_y);

	//GameCharacter
	fill(200,150,150);
	ellipse(gameChar_x, gameChar_y-60,35);
	fill(255,0,0);
	rect(gameChar_x-13, gameChar_y-45, 26, 30);
	fill(0);
	rect(gameChar_x-13, gameChar_y-45, 10, 10);
	fill(0);
	rect(gameChar_x+3, gameChar_y-45, 10, 10);
	fill(0);
	rect(gameChar_x-13, gameChar_y-15, 10, 10);
	fill(0);
	rect(gameChar_x+3, gameChar_y-15, 10, 10);

	//Collectable_Item_1
	fill(255,255,0);
	ellipse(collectable.x_pos,collectable.y_pos,collectable.size);
	fill(0);
	textSize(20);
	textAlign(CENTER,CENTER);
	text("$",collectable.x_pos, collectable.y_pos);

	//Collectable_Item_2
	fill(255,255,0);
	ellipse(collectable.x_pos + 100, collectable.y_pos, collectable.size);
	fill(0);
	textSize(20);
	textAlign(CENTER,CENTER);
	text("$",collectable.x_pos + 100 ,collectable.y_pos);

	//Collectable_Item_3
	fill(255,255,0);
	ellipse(collectable.x_pos + 200, collectable.y_pos, collectable.size);
	fill(0);
	textSize(20);
	textAlign(CENTER,CENTER);
	text("$",collectable.x_pos + 200 ,collectable.y_pos);
}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
