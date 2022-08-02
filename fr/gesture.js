var circle = 0
var swipe = 0
var keytap = 0
var screentap = 0
var controller = new Leap.Controller({
  enableGestures: true,
  frameEventName: 'animationFrame'
  });
var swipeDisplay = document.getElementById('swipe');
var circleDisplay = document.getElementById('circle')
var keytapDisplay = document.getElementById('keyTap')
var screentapDisplay = document.getElementById('screen')


controller.on('frame', function(frame){
frame.hands.forEach(function(hand, index){
});

frame.gestures.forEach(function(gesture, index) {
  if(gesture.state == "stop") {
  if(gesture.type == "swipe" ) {
    swipe = swipe+1;
    swipeDisplay.innerText = swipe;
  }
  else if (gesture.type == "circle") {
    circle = circle+1;
    circleDisplay.innerText = circle;
  }
  else if (gesture.type == "keyTap") {
    keytap = keytap+1;
    keytapDisplay.innerText = keytap;
  }
  else if (gesture.type == "screenTap") {
    screentap = screentap+1;
    screentapDisplay.innerText = screentap;
  }
  //console.log(gesture)
  }
});
});
controller.connect();