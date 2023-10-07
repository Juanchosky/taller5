
function generarTablaDeMultiplicar() {
   
  var numeroSeleccionado = parseInt(document.getElementById("numeroSeleccionado").value);
  
   
  var filasAMostrar = parseInt(document.getElementById("filasAMostrar").value);
  
  var tablaResultado = document.getElementById("tablaResultado");
  
    
    tablaResultado.innerHTML = "";
  
    if (isNaN(numeroSeleccionado)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
  
    if (isNaN(filasAMostrar) || filasAMostrar <= 0) {
      alert("Por favor, ingrese un número válido para las filas a mostrar.");
      return;
    }
  
    for (let i = 1; i <= filasAMostrar; i++) {
      var resultado = numeroSeleccionado * i;
      var fila = document.createElement("p");
      fila.textContent = `${numeroSeleccionado} x ${i} = ${resultado}`;
      tablaResultado.appendChild(fila);
    }
  }
  