class Paper
{
    constructor(x,y,r)
    {
        var options = 
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.image = loadImage("paper.png");

        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }

    display()
    {

        var paper_pos = this.body.position;
        
        push();
        translate(paper_pos.x, paper_pos.y);
        ellipseMode(RADIUS);
        strokeWeight(0.1);
        stroke(100);
        fill(100);
        ellipse(0,0,this.r, this.r);
        pop();
        
        image(this.image,paper_pos.x-40,paper_pos.y-35,70,70);
    }
}