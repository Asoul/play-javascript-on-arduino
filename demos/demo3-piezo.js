var five = require("johnny-five")
var board = new five.Board()
board.on("ready", function() {
  var piezo = new five.Piezo(3)
  piezo.play({
    song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
    beats: 1 / 4,
    tempo: 100
  })
})