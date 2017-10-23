
/**
 * 
 * Manages collection of random value returning methods
 * 
*/



//from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

/**
 * Generate a value and return hex equavalent 
 */
function returnRandomHex(){
    var colorValue = getRandomIntInclusive(0,15);
    var hexValue = "";
    switch(colorValue){
        case 0:
            hexValue = "0";
            break;
            case 1:
            hexValue = "1";
            break;
            case 2:
            hexValue = "2";
            break;
            case 3:
            hexValue = "3";
            break;
            case 4:
            hexValue = "4";
            break;
            case 5:
            hexValue = "5";
            break;
            case 6:
            hexValue = "6";
            break;            
            case 7:
            hexValue = "7";
            break;
            case 8:
            hexValue = "8";
            break;
            case 9:
            hexValue = "9";
            break;
            case 10:
            hexValue = "A";
            break;
            case 11:
            hexValue = "B";
            break;
            case 12:
            hexValue = "C";
            break;
            case 13:
            hexValue = "D";
            break;
            case 14:
            hexValue = "E";
            break;
            case 15:
            hexValue = "F";
            break;                       
            default:
            break;
    }

    return hexValue;
}

/**
 * Return color in #000000 - #FFFFFF
 */
function returnRandomColor(){
    
    var rtnColor = '#';
   
    for(var i = 0; i < 6; i++){
        rtnColor += returnRandomHex();    
    }

    return rtnColor;
}