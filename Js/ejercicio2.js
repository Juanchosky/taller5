
var estudiantes = [];

function agregarEstudiante(nombre, edad, id) {
    estudiantes.push({
        nombre: nombre,
        edad: edad,
        id: id
    });
}

function buscarEstudiantePorId(id) {
    return estudiantes.find(estudiante => estudiante.id === id);
}

function registrarEstudianteDesdeFormulario() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var id = document.getElementById("id").value;

    agregarEstudiante(nombre, edad, id);
    alert("Estudiante registrado correctamente!");
}

function buscarEstudianteDesdeFormulario() {
    var idBusqueda = document.getElementById("idBusqueda").value;
    var estudiante = buscarEstudiantePorId(idBusqueda);
    
    if (estudiante) {
        document.getElementById("resultadoBusqueda").innerText = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.id}`;
    } else {
        document.getElementById("resultadoBusqueda").innerText = 'Estudiante no encontrado.';
    }
}
