class snow {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            density:2,
            isStatic:false
        }

         this.body = Bodies.circle(x, y,r, options);
         this.r = r
         World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
         fill(white)
         ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

   };

