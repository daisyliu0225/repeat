for (let index = 0; index < 4; index++) {
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
}
