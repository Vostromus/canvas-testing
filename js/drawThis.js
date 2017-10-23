
function Dot(x,y,color) {

    this.posX = x;
    this.posY = y;    
    this.color = color;

}

Dot.prototype.updateLocation = function(speedX,speedY){
    this.posX += speedX;
    this.posY += speedY;
}

Dot.prototype.setLocation = function(posX,posY){
    this.posX = posX;
    this.posY = posY;
}

Dot.prototype.updateColor = function(color){
    this.color = color;
}



/**
 * Returns a collection of dots to draw on the screen
 */
function makeSomeDots(){

    var numberToCreate = 1000;
    var makingDots = true;
    var dotCollection = [];
    var min = 0;
    var max = 800;

    while(dotCollection.length < numberToCreate){
        
        var aDot = new Dot(getRandomIntInclusive(min,max),getRandomIntInclusive(min,max),returnRandomColor());        
        dotCollection.push(aDot);      
    }

    return dotCollection;
}

function drawScreen(){
    var c = document.getElementById("mainScreen");
    var ctx = c.getContext("2d");

    //Load up the dots we need to draw
    var dotsToDraw = makeSomeDots();

    //process the dots to draw
    for(var i = 0; i < dotsToDraw.length; i++)
    {
        ctx.fillStyle = dotsToDraw[i].color;
        ctx.fillRect(dotsToDraw[i].posX,dotsToDraw[i].posY,2,2);    
        ctx.stroke();
    }
}
