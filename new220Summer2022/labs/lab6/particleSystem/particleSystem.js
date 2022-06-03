class Particle {
    x = Math.random() * 600;
    y = Math.random() * 400;
    velocity = { x: 2, y: 2 };
    //velocityX = 2;
    // velocityY = 2;
    color = [ Math.random() * 255, 100, 10 ];

    update(){
        noStroke();
        fill( this.color )
        circle(this.x, this.y, 10);

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}

//p5 stuff

    
    let particles = [];
    
for(var i= 0; i< 5; i++){
    let p = new Particle();
    particles.push(p);

}
    function setup(){
        createCanvas(600, 400);     
        
    }

    function draw(){
        for (var i = 0; i < particles.length; i++){
            particles[i].update();
        }
    }