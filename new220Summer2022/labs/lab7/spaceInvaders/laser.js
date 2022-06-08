class Laser{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = 5; // radius of laser
        this.diam = this.r * 2; 
        this.toDelete = false; // flag  
    }

    show() {
        noStroke();
        fill(255, 40, 100); // purplish
        ellipse(this.x, this.y, this.diam, this.diam);
    }

    move() {
        this.y = this.y - 20; // UP on y Axis
    }
    hits(alien) {
        // dist() function measures the disance between 2 points / x & y
        var d = dist(this.x, this.y, alien.x, alien.y);
        if (d < this.r + alien.radius) {
            return true;
        } else {
            return false; 
        }
    }
    remove() {
        this.toDelete = true; 
    }
}