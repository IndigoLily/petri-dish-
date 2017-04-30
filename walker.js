function walker(x, y) {
    this.loc = createVector(x, y);
    this.prevLoc = this.loc;
    this.speed = width/100;
    this.move = function() {
        this.prevLoc = createVector(this.loc.x, this.loc.y);
        var v = createVector(this.speed, 0);
        var test;
        var center = createVector(width/2, height/2);
        do {
            test = createVector(this.loc.x, this.loc.y)
            v.rotate(random(-360, 360));
            test.add(v);
        } while (test.dist(center)*2 > width);
        this.loc.add(v);
        // console.log(test.dist(center));
    }
    this.draw = function() {
        push();
        colorMode(HSB);
        stroke(frameCount/5%360, 100, 100);
        line(this.prevLoc.x, this.prevLoc.y, this.loc.x, this.loc.y);
        pop();
    }
}
