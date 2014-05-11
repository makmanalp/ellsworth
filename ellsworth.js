var amount = 8;
var size = 80;

var colors = [  "#ece9e0", "#e9e9df",   "#ead313",  "#cf5313", "#d75766", "#c71a1c", "#825095", "#311d36", "#315fac", "#1a226b", "#8ab565", "#152525"];
//              offwhite1,  offwhite2,  lemonyellow, orangered, pink, redred, purple, darkpurple, lighterblue, darkblue, pukegreen, darkgreen

for (var i = 0; i < amount; i++) {
    for (var j = 0; j < amount; j++) {
        var rect = new Rectangle(i * size, j * size, size, size);
        var path = new Path.Rectangle(rect);
        path.fillColor = colors[Math.floor(Math.random() * colors.length)];
    }
}


//TODO: jiggerize squares: humanize move /scale by tiny amounts
//TODO: faded look, very minor color gradients
