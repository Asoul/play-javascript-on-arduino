var five = require("johnny-five")
var keypress = require("keypress")
board = new five.Board()

board.on("ready", function() {
  var piezo = new five.Piezo(3)

  var keyboardMapping = {
    'z': 'C3',
    'x': 'D3',
    'c': 'E3',
    'v': 'F3',
    'b': 'G3',
    'n': 'A3',
    'm': 'B3',
    'a': 'C4',
    's': 'D4',
    'd': 'E4',
    'f': 'F4',
    'g': 'G4',
    'h': 'A4',
    'j': 'B4',
    'k': 'C5',
    'q': 'D5',
    'w': 'E5',
    'e': 'F5',
    'r': 'G5',
    't': 'A5',
    'y': 'B5',
    'u': 'C6',
    'i': 'C1',
    'o': 'G1',
    'p': 'C2'
  }

  function controller(ch, key) {
    if (key) {
      if (key.name in keyboardMapping) {
        pitch = keyboardMapping[key.name]
      } else {
        pitch = 'C4'
      }
      piezo.play({
        song: [
          [pitch, 1 / 4],
        ],
        tempo: 100
      })
    }
  }

  console.log('open piano on pin 3')
  keypress(process.stdin)

  process.stdin.on("keypress", controller)
  process.stdin.setRawMode(true)
  process.stdin.resume()

})
