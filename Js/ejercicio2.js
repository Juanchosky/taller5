
let estudiantes = [];

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
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const id = document.getElementById("id").value;

    agregarEstudiante(nombre, edad, id);
    alert("Estudiante registrado correctamente!");
}

function buscarEstudianteDesdeFormulario() {
    const idBusqueda = document.getElementById("idBusqueda").value;
    const estudiante = buscarEstudiantePorId(idBusqueda);
    
    if (estudiante) {
        document.getElementById("resultadoBusqueda").innerText = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.id}`;
    } else {
        document.getElementById("resultadoBusqueda").innerText = 'Estudiante no encontrado.';
    }
}
