// Se inicializan las variables peso y estatura en los valores establecidos en el ejercicio
let IMC = 0
let Peso = 74
let Estatura = 180
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        // A la variable IMC se le asigna el peso por 10000
        IMC = Peso * 10000
        // A la variable IMC se le asigna el valor de IMC entre la estatura al cuadrado
        IMC = IMC / (Estatura * Estatura)
        basic.showNumber(IMC)
        // Si el IMC es mayo que 30 se muestra OB (obesidad)
        // Si el IMC es mayor que 25 y menor ugial que 30 muestra SP (Sobre peso)
        // SI el IMC es Mayor o igual a 18.5 y menor o igual que 25 muesta SA (Saludable)
        // sino miestra DE (Delgado)
        if (IMC > 30) {
            basic.showString("OB")
        } else if (IMC > 25 && IMC <= 30) {
            basic.showString("SP")
        } else if (IMC >= 18.5 && IMC <= 25) {
            basic.showString("SA")
        } else {
            basic.showString("DE")
        }
    }
    // Si es agitado la variable peso se le asigna 74
    while (input.isGesture(Gesture.Shake)) {
        Peso = 74
        basic.showNumber(Peso)
    }
    // Si se presiona el boton A la variable peso aumenta en uno
    while (input.buttonIsPressed(Button.A)) {
        Peso = Peso + 1
        basic.showNumber(Peso)
    }
    // Si se presiona el boton B la variable peso disminuye en 1
    while (input.buttonIsPressed(Button.B)) {
        Peso = Peso - 1
        basic.showNumber(Peso)
    }
})
