const questions = [
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
    let puntaje = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const respuestaUsuario = prompt(questions[i].question);
  
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
    const resultado = `Puntuación: ${puntaje} de ${totalPreguntas} respuestas correctas`;
    alert(resultado);
  }
  

  window.onload = iniciarJuego;
  