function calcularEstadisticas(calificaciones) {
    if (calificaciones.length === 0) {
        return {
            error: 'No hay calificaciones disponibles.'
        };
    }

    var suma = 0;
    var calificacionMasAlta = Number.MIN_SAFE_INTEGER;
    var calificacionMasBaja = Number.MAX_SAFE_INTEGER;

    for (var calificacion of calificaciones) {
        suma += calificacion;
        if (calificacion > calificacionMasAlta) {
            calificacionMasAlta = calificacion;
        }
        if (calificacion < calificacionMasBaja) {
            calificacionMasBaja = calificacion;
        }
    }

    var promedio = suma / calificaciones.length;

    return {
        promedio: parseFloat(promedio.toFixed(2)),
        calificacionMasAlta: calificacionMasAlta,
        calificacionMasBaja: calificacionMasBaja
    };
}

function mostrarEstadisticas() {
    var calificaciones = prompt("Introduce las calificaciones separadas por coma (,):");
    calificaciones = calificaciones.split(",").map(Number);
    var resultado = calcularEstadisticas(calificaciones);
    alert(`Promedio: ${resultado.promedio}\nCalificación más alta: ${resultado.calificacionMasAlta}\nCalificación más baja: ${resultado.calificacionMasBaja}`);
}
