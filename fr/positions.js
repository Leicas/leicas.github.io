var stabilizedDisplay = document.getElementById("stabPosition");
var deltaDisplay = document.getElementById("delta");

var controller = new Leap.Controller();
var nameMap = ["thumb", "index", "middle", "ring", "pinky"];
distance = function(a,b) {
var x = a[0]-b[0]
var y = a[1]-b[1]
var z = a[2]-b[2]
x *= x
y *= y
z *= z
return Math.sqrt(x+y+z)
}

controller.on('frame', function(frame){
    if(frame.fingers.length > 0)
    {
        frame.fingers.forEach(function(finger, index) {
            var fingerName = nameMap[finger.type];
            document.getElementById(fingerName).innerText = finger.tipPosition;

        });
        stabilizedDisplay.innerText = distance(frame.fingers[0].tipPosition, frame.fingers[1].tipPosition);
        
    }
    if(frame.hands.length > 0)
    {
        document.getElementById('palm').innerText = frame.hands[0].palmPosition;
        document.getElementById('type').innerText = frame.hands[0].type;
        document.getElementById('pinchStrength').innerText = frame.hands[0].pinchStrength;
        //console.log(frame.hands[0])
    }
});
controller.connect();