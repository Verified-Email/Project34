class Hero{
        constructor(x,y,radius) {
            var options = {
                'frictionAir':0.04,
                'density':1.0
                }

            this.radius = radius;
            this.x = x;
            this.y = y;
    
            this.image = loadImage("images/Superhero-02.png");
    
            this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
    
            World.add(world, this.body);
        }
        display() {
                
            var pos=this.body.position;		
    
            push()
            translate(pos.x, pos.y);
            rectMode(CENTER)
            image(this.image, 0, 0, this.radius, this.radius);
            pop()	
        }
    }
