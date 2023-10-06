
const bookDatabase = [];


function agregarLibro() {
  const titulo = prompt("Ingrese el título del libro:");
  const autor = prompt("Ingrese el autor del libro:");
  const añoPublicacion = prompt("Ingrese el año de publicación del libro:");


  const libro = {
    titulo: titulo,
    autor: autor,
    añoPublicacion: añoPublicacion,
  };


  bookDatabase.push(libro);

  alert("Libro agregado con éxito.");
}


function buscarLibroPorTitulo() {
  const tituloBuscado = prompt("Ingrese el título del libro a buscar:");


  const librosEncontrados = bookDatabase.filter((libro) =>
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
  const autorBuscado = prompt("Ingrese el autor del libro a buscar:");

 
  const librosEncontrados = bookDatabase.filter((libro) =>
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
