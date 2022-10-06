input.onButtonPressed(Button.A, function () {
    while (CONTAR_A <= 4) {
        basic.showNumber(CONTAR_A)
        CONTAR_A += 1
    }
    REPETIR_CARITAS()
})
input.onButtonPressed(Button.AB, function () {
    while (CONTAR_AB <= 11) {
        basic.showNumber(CONTAR_AB)
        CONTAR_AB += 2
    }
    REPETIR_CARITAS()
})
input.onButtonPressed(Button.B, function () {
    while (CONTAR_B <= 4) {
        basic.showNumber(CONTAR_B)
        CONTAR_B += 1
    }
    REPETIR_CARITAS()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (CONTAR_LOGO <= 4) {
        basic.showNumber(CONTAR_LOGO)
        CONTAR_LOGO += 2
    }
    REPETIR_CARITAS()
})
function REPETIR_CARITAS () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
let CONTAR_B = 0
let CONTAR_AB = 0
let CONTAR_A = 0
let CONTAR_LOGO = 0
CONTAR_LOGO = 0
CONTAR_LOGO = 0
CONTAR_LOGO = 1
CONTAR_LOGO = 0
