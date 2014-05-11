var mousePoint = view.center;
var amount = 8;
var size = 80;
var animate = false;
var colors = [  "#ece9e0", "#e9e9df",   "#ead313",  "#cf5313", "#d75766", "#c71a1c", "#825095", "#311d36", "#315fac", "#1a226b", "#8ab565", "#152525"];
//              offwhite1,  offwhite2,  lemonyellow, orangered, pink, redred, purple, darkpurple, lighterblue, darkblue, pukegreen, darkgreen

// Draw squares
for (var i = 0; i < amount; i++) {
    for (var j = 0; j < amount; j++) {
        var rect = new Rectangle(i * size, j * size, size, size);
        var path = new Path.Rectangle(rect);
        path.fillColor = colors[Math.floor(Math.random() * colors.length)];
    }
}


//Wiggle
function onMouseMove(event) {
    mousePoint = event.point;
}

var children = project.activeLayer.children;
function onFrame(event) {
    if (animate){
        for (var i = 0, l = children.length; i < l; i++) {
            var item = children[i];
            var delta = (mousePoint - item.position) / (i + 5);
            item.rotate(Math.sin((event.count + i) / 10) * 7);
            if (delta.length > 0.1)
                item.position += delta;
        }
    }
}

//Toggle wiggle
function onMouseUp(event) {
    animate = !animate;
}


//TODO: jiggerize squares: humanize move /scale by tiny amounts
//TODO: faded look, very minor color gradients
