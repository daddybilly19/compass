let degrees = 0
let K: game.LedSprite = null
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 && degrees > 135) {
        basic.clearScreen()
        while (degrees < 45 && degrees > 135) {
            K = game.createSprite(2, 0)
        }
    } else if (degrees < 135 && degrees > 225) {
        basic.clearScreen()
        while (degrees < 135 && degrees > 225) {
            K = game.createSprite(4, 2)
        }
    } else if (degrees < 225 && degrees > 315) {
        basic.clearScreen()
        while (degrees < 225 && degrees > 315) {
            K = game.createSprite(2, 4)
        }
    } else if (degrees < 315) {
        basic.clearScreen()
        while (degrees < 315) {
            K = game.createSprite(0, 2)
        }
    }
})
