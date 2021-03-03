class DUSTBIN
{
    constructor(x,y,width,height)
    {
        var D_options=
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height, D_options);
        World.add(world, this.body);

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.image = loadImage("DustbinGreen.png");

    }

    display()
    {
        var pos = this.body.position;
        
        fill("red");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        image(this.image, 1000, 350, 150, 150);
    }
}