var five = require("johnny-five")
var keypress = require("keypress")
var board = new five.Board()

board.on("ready", function() {

  var led = new five.Led(5)

  var brightness = 0
  function controller(ch, key) {
    if (key) {
      if (key.name === "up") {
        brightness += 25
      }
      if (key.name === "down") {
        brightness -= 25
      }
      brightness = Math.max(brightness, 0)
      brightness = Math.min(brightness, 250)
      led.brightness(brightness)
    }
  }

  keypress(process.stdin)

  process.stdin.on("keypress", controller)
  process.stdin.setRawMode(true)
  process.stdin.resume()
})