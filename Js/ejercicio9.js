function calcularEstadisticas(calificaciones) {
    if (calificaciones.length === 0) {
        return {
            error: 'No hay calificaciones disponibles.'
        };
    }

    let suma = 0;
    let calificacionMasAlta = Number.MIN_SAFE_INTEGER;
    let calificacionMasBaja = Number.MAX_SAFE_INTEGER;

    for (let calificacion of calificaciones) {
        suma += calificacion;
        if (calificacion > calificacionMasAlta) {
            calificacionMasAlta = calificacion;
        }
        if (calificacion < calificacionMasBaja) {
            calificacionMasBaja = calificacion;
        }
    }

    let promedio = suma / calificaciones.length;

    return {
        promedio: parseFloat(promedio.toFixed(2)),
        calificacionMasAlta: calificacionMasAlta,
        calificacionMasBaja: calificacionMasBaja
    };
}

function mostrarEstadisticas() {
    let calificaciones = prompt("Introduce las calificaciones separadas por coma (,):");
    calificaciones = calificaciones.split(",").map(Number);
    let resultado = calcularEstadisticas(calificaciones);
    alert(`Promedio: ${resultado.promedio}\nCalificación más alta: ${resultado.calificacionMasAlta}\nCalificación más baja: ${resultado.calificacionMasBaja}`);
}
