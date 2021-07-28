var volume = 0
var pitch = 0
var context = new AudioContext()
var o = context.createOscillator()
var  g = context.createGain()
o.connect(g)
g.connect(context.destination)
g.gain.value = 0.0
o.start(0)
Leap.loop(function(frame) {

  frame.hands.forEach(function(hand, index) {
    if (hand.type == "left")
    {
      //console.log("Right hand.");
      //#console.log(hand.stabilizedPalmPosition)
      //console.log(hand.toString())
      //console.log(hand.screenPosition())
     volume = -1 *(hand.palmPosition[1]-100) / 1000.0
     //console.log(volume)
     g.gain.value = volume
     //console.log(volume)
    }
    else {
      pitch = hand.palmPosition[2]
      //console.log(pitch)
      o.frequency.value = pitch*2.0+440
    }

  });

}).use('screenPosition');
