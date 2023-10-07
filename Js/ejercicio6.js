
var bookDatabase = [];


function agregarLibro() {
  var titulo = prompt("Ingrese el título del libro:");
  var autor = prompt("Ingrese el autor del libro:");
  var añoPublicacion = prompt("Ingrese el año de publicación del libro:");


  var libro = {
    titulo: titulo,
    autor: autor,
    añoPublicacion: añoPublicacion,
  };


  bookDatabase.push(libro);

  alert("Libro agregado con éxito.");
}


function buscarLibroPorTitulo() {
  var tituloBuscado = prompt("Ingrese el título del libro a buscar:");


  var librosEncontrados = bookDatabase.filter((libro) =>
    libro.titulo.toLowerCase() === tituloBuscado.toLowerCase()
  );

  if (librosEncontrados.length === 0) {
    alert("No se encontraron libros con el título buscado.");
  } else {

    librosEncontrados.forEach((libro) => {
      alert(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.añoPublicacion}`);
    });
  }
}


function buscarLibroPorAutor() {
  var autorBuscado = prompt("Ingrese el autor del libro a buscar:");

 
  var librosEncontrados = bookDatabase.filter((libro) =>
    libro.autor.toLowerCase() === autorBuscado.toLowerCase()
  );

  if (librosEncontrados.length === 0) {
    alert("No se encontraron libros con el autor buscado.");
  } else {
   
    librosEncontrados.forEach((libro) => {
      alert(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.añoPublicacion}`);
    });
  }
}
