// FUNCIONES, PARAMETROS Y CONDICIONES
// EJERCICIO 1

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeVerPelicula(12, false))
console.log(puedeVerPelicula(12, true))
console.log(puedeVerPelicula(16, false))
console.log(puedeVerPelicula(38, true))

// EJERCICIO 2

const avanzarSemaforo = (colorActual) => {
    if (colorActual == 'verde') {
         return 'amarillo'
    }
    else if (colorActual == 'amarillo') {
         return 'rojo'
    }
    else if (colorActual == 'rojo'){
         return 'verde'
    }
    else {
        return 'Error: color de semáforo inválido'
    } 
}
 
console.log(avanzarSemaforo('verde'))
console.log(avanzarSemaforo('amarillo'))
console.log(avanzarSemaforo('rojo'))
console.log(avanzarSemaforo('lila'))

 // EJERCICIO 3

const esVocal = (letra) => {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return true
    }
    else {
        return false
    }
}

console.log(esVocal('a'))
console.log(esVocal('n'))
console.log(esVocal('e'))

// EJERCICIO 4

const esConsonante = (letra) => {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return false
    }
    else {
        return true
    }
}

console.log(esConsonante('a'))
console.log(esConsonante('n'))
console.log(esConsonante('e'))

// EJERCICIO 5

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests && pagoImpuestos && tieneMultasImpagas == false) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeRenovarCarnet(true, true, true))
console.log(puedeRenovarCarnet(true, true, false))
console.log(puedeRenovarCarnet(true, false, true))
console.log(puedeRenovarCarnet(true, false, false))
console.log(puedeRenovarCarnet(false, true, true))
console.log(puedeRenovarCarnet(false, true, false))
console.log(puedeRenovarCarnet(false, false, true))
console.log(puedeRenovarCarnet(false, false, false))

// EJERCICIO 6

const esPositivaONegativo = (numero) => {
    if(numero >= 0) {
        return 'Positiva'
    }
    else {
        return 'Negativa'
    }
}

console.log(esPositivaONegativo(3))
console.log(esPositivaONegativo(-5))

// EJERCICIO 7

const edadDelUsuario = 18 

const checkEdadDelUsuario = (edad) => {
    if (edad >= 18) {
        return true
    }
    else {
        return false
    }
}

console.log(checkEdadDelUsuario(edadDelUsuario))
console.log(checkEdadDelUsuario(7))
console.log(checkEdadDelUsuario(88))
console.log(checkEdadDelUsuario(15))