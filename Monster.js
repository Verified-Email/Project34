class Monster{
    constructor(x,y,width,height) {
        var options = {
            'frictionAir':0.04,
            'density':1.0
            }

        this.x = x;
        this.y = y;
        this.width = width
        this.height = height

        this.image = loadImage("images/Monster-01.png");

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);

        World.add(world, this.body);
    }
    display() {
            
        var pos=this.body.position;		

        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        image(this.image, 0, 0, 200, 200);
        pop()	
    }
}
