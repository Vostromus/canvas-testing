/**
 * Dot Class  
 */
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