basic.forever(function () {
    basic.showIcon(IconNames.Square)
    basic.pause(500)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
})
