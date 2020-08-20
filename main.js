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