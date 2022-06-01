class Particle {
    x = Math.random() * 600;
    y = Math.random() * 400;
    velocityX = 2;
    velocityY = 2;
    color = [ Math.random() * 200, 200,50];

    update(){
        noStroke();
        fill( this.color )
        circle(this.x, this.y, 10);

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}

//p5 stuff

    let p = new Particle();
    let particles = [];

    function setup(){
        createCanvas(600, 400);

        for (var i = 0; i < particles.length; i++){
            particles[i]/update();
        }
        
    }
