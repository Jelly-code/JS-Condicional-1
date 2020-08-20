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
