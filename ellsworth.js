// -----  Configurables --------

var passePartoutAmount = 0; //n-square border
var amount = 8;
var size = 90;

var whites = ["#f0f0f0", "#ece9e0", "#e9e9df"];
var lights = ["#ead313",  "#cf5313", "#d75766", "#c71a1c", "#825095", "#311d36"];
//            lemonyellow, orangered, pink, redred, purple, pukegreen
var darks = ["#311d36", "#315fac", "#1a226b", "#152525"];
//           darkpurple, lighterblue, darkblue, darkgreen
var colors = Array.concat(whites, lights, darks);

// ------- Helpers ------------
//
function randomColor(type){
    return new Color(type[Math.floor(Math.random() * type.length)]);
}

function posNegRandom(range){
    return (2 * range) * Math.random() - range
}

// --------- Initial Draw --------------

// Draw passe-partout
if (passePartoutAmount != 0){
    var passePartout = Path.Rectangle(
        new Rectangle(0, 0,
                      (amount + passePartoutAmount * 2) * size,
                      (amount + passePartoutAmount * 2) * size));
    passePartout.fillColor = randomColor(whites);
}

// Draw squares
for (var i = passePartoutAmount; i < amount + passePartoutAmount; i++) {
    for (var j = passePartoutAmount; j < amount + passePartoutAmount; j++) {
        var rect = new Rectangle(i * size, j * size, size, size);
        var path = new Path.Rectangle(rect);
        var colorRand = Math.random();
        if (colorRand > 0.8){
            path.fillColor = randomColor(lights) + posNegRandom(0.05);
        } else if (colorRand > 0.5){
            path.fillColor = randomColor(darks) + posNegRandom(0.05);
        } else {
            path.fillColor = randomColor(whites) + posNegRandom(0.02);
        }
        path.strokeColor = randomColor(colors);
        path.strokeWidth = 0.2;
        path.rotate((0.6 * Math.random()) - 0.3);
    }
}

// ----------- Animation --------------

//Wiggle
var animate = false;
var children = project.activeLayer.children;
function onFrame(event) {
    if (animate){
        for (var i = 0, l = children.length; i < l; i++) {
            children[i].rotate(Math.sin((event.count + i) / 10) * 7);
        }
    }
}

//Toggle wiggle
function onMouseUp(event) {
    animate = !animate;
}


//TODO: faded look, very minor color gradients
//TODO: light squares get a light border more often
