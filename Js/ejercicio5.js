var questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      answer: "París"
    },
    {
      question: "¿Quién escribió 'Cien años de soledad'?",
      answer: "Gabriel García Márquez"
    }
  ];
  

  function iniciarJuego() {
    var puntaje = 0;
  
    for (var i = 0; i < questions.length; i++) {
      var respuestaUsuario = prompt(questions[i].question);
  
      if (respuestaUsuario.toLowerCase() === questions[i].answer.toLowerCase()) {
        alert("¡Respuesta correcta!");
        puntaje++;
      } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${questions[i].answer}`);
      }
    }
  
    mostrarPuntuacion(puntaje, questions.length);
  }
  

  function mostrarPuntuacion(puntaje, totalPreguntas) {
    var resultado = `Puntuación: ${puntaje} de ${totalPreguntas} respuestas correctas`;
    alert(resultado);
  }
  

  window.onload = iniciarJuego;
  