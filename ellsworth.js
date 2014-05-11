var amount = 8;
var size = 100;
var animate = false;

var whites = ["#ece9e0", "#e9e9df"];
var lights = ["#ead313",  "#cf5313", "#d75766", "#c71a1c", "#825095", "#311d36"];
//            lemonyellow, orangered, pink, redred, purple, pukegreen
var darks = ["#311d36", "#315fac", "#1a226b", "#152525"];
//           darkpurple, lighterblue, darkblue, darkgreen
var colors = Array.concat(whites, lights, darks);


function randomColor(){
    return new Color(colors[Math.floor(Math.random() * colors.length)]);
}


// Draw squares
for (var i = 0; i < amount; i++) {
    for (var j = 0; j < amount; j++) {
        var rect = new Rectangle(i * size, j * size, size, size);
        var path = new Path.Rectangle(rect);
        path.fillColor = randomColor() + 0.1 * Math.random();
        path.strokeColor = randomColor();
        path.strokeWidth = 0.2;
        path.rotate((0.4 * Math.random()) - 0.2);
    }
}


//Wiggle
var children = project.activeLayer.children;
function onFrame(event) {
    if (animate){
        for (var i = 0, l = children.length; i < l; i++) {
            var item = children[i];
            item.rotate(Math.sin((event.count + i) / 10) * 7);
        }
    }
}

//Toggle wiggle
function onMouseUp(event) {
    animate = !animate;
}


//TODO: jiggerize squares: humanize move /scale by tiny amounts
//TODO: faded look, very minor color gradients
