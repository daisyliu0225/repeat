input.onButtonPressed(Button.A, function () {
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
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.Surprised)
    basic.pause(100)
    basic.clearScreen()
})
