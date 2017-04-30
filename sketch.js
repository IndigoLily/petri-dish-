var walker;

function setup() {
    var size = (windowWidth > windowHeight) ? Math.round(windowHeight*.65) : 
                                              Math.round(windowWidth*.65);
    createCanvas(size, size);
    angleMode(DEGREES);
    walker = new walker(width/2, height/2);
}

function draw() {
    for(var i = 0; i < 100; i++) {
        walker.move();
        walker.draw();
    }
}
