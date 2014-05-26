// http://www.wikipaintings.org/en/paintings-by-style/hard-edge-painting?firstArtist=ellsworth-kelly#supersized-alexander-liberman-292320

var spacing = 100;
var circleRadius = 40;
var miniCircleRadius = 15;
var miniCircleOffset = 25;
var amazonwidth = 20;

var animate = false;
var miniCircles = [];

var bg = new Path.Rectangle(0, 0, 5 * spacing, 5 * spacing);
bg.fillColor = "#ecead5";

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {

        // Big circle
        var circle = new Path.Circle(
            new Point((i + 1) * spacing,
                      (j + 1) * spacing),
            circleRadius);
        circle.fillColor = "#1e1e20";

        // Small circle
        var delta = 2 * (i % 2) - 1;
        var miniCircle = new Path.Circle(
            new Point((i + 1) * spacing,
                      (j + 1) * spacing + miniCircleOffset * delta),
            miniCircleRadius);
        miniCircle.fillColor = "#efda3f";
        miniCircles.push([miniCircle,
            new Point((i + 1) * spacing,
                      (j + 1) * spacing),
        ]);

    }
}

var amazon = new Path({
    strokeColor: '#0657a8',
    strokeWidth: amazonwidth,
    strokeCap: 'round'
});


/*
for (var i = 0; i < 4; i++) {
    if (i % 2){
        for (var j = 0; j < 4; j++) {
            amazon.add(new Point((j + 1) * 100,
                                 (i + 1) * 100));
        }
    } else {
        for (var j = 4; j > 0; j--) {
            amazon.add(new Point((j + 1) * 100,
                                 (i + 1) * 100));
        }
    }
}
*/

function createArc(center, rotate){

    delta = circleRadius + amazonwidth / 2.0;
    var top = new Point(
        center.x,
        center.y + delta
    );
    var side = new Point(
        center.x + delta,
        center.y
    );
    var mid = new Point(
        center.x + delta / Math.sqrt(2.0),
        center.y + delta / Math.sqrt(2.0)
    );

    params = {from: top, through:mid, to:side};
    arc = Path.Arc(params);
    arc.strokeColor = "#0657a8";
    arc.strokeWidth = amazonwidth;
    arc.strokeCap = "round";
    arc.rotate(90 * (rotate % 4), center);
    return arc;
}


var s = new Group();
var center = new Point(spacing, spacing);
s.addChild(createArc(center, 2));
s.addChild(createArc(center, 3));
s.addChild(createArc(center, 1));
center = new Point(2 * spacing, spacing);
s.addChild(createArc(center, 0));
s.addChild(createArc(center, 1));
center = new Point(3 * spacing, spacing);
s.addChild(createArc(center, 2));
s.addChild(createArc(center, 3));
center = new Point(4 * spacing, spacing);
s.addChild(createArc(center, 1));

var s2 = s.clone();
s2.rotate(180, new Point(100, 100));
s2.translate(new Point(300, 100));

s.addChildren(s2.children);

var s3 = s.clone();
s3.translate(new Point(0, 200));

//Toggle wiggle
function onMouseUp(event) {
    animate = !animate;
}

function onFrame(event){
    if (animate) {
        miniCircles.forEach(function(item) {
            item[0].rotate(5, item[1]);
        });
    }
}
