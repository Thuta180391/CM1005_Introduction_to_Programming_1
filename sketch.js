function setup()
{
	createCanvas(800,800);
	background(125,125,255);
}

function draw()
{
	//Circles
	fill(255,255,0);
	ellipse(400,400,800,800);
	fill(30,89,65);
	ellipse(400,400,200);
	fill(255,0,0);
	ellipse(200,200,100,100);
	fill(100,20,100)
	ellipse(600,500,135,135);
	fill(0);
	ellipse(159,400,250,100);
	fill(255);
	ellipse(300,690,250,150);
	ellipse(600,160,150,100)
	
	//rectangle
	fill(200,89,32,120);
	rect(333,333,135,130,10);

	//Triangles
	fill(30,255,255);
	triangle(330,465,470,465,400,335);
	fill(0,0,255);
	triangle(0,30,800,400,300,20);
	triangle(800,830,0,450,800,650)

	//lines
	line(100,190, 600, 800);
	line(100,0,800,600);
	line(600,50,70,600);
	line(100,600,500,750);
	strokeWeight(10);

	//Point
	point(400,400);

	//Vertex
	fill(255);
	beginShape();
	vertex(400,30);
	vertex(430,60);
	vertex(460,30);
	vertex(490,60);
	vertex(510,30);
	vertex(540,60);
	vertex(570,30);
	endShape();


	
	
}