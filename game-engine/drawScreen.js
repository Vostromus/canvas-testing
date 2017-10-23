
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

drawScreen();