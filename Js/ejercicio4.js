
function generarTablaDeMultiplicar() {
   
    const numeroSeleccionado = parseInt(document.getElementById("numeroSeleccionado").value);
  
   
    const filasAMostrar = parseInt(document.getElementById("filasAMostrar").value);
  
    const tablaResultado = document.getElementById("tablaResultado");
  
    
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
      const resultado = numeroSeleccionado * i;
      const fila = document.createElement("p");
      fila.textContent = `${numeroSeleccionado} x ${i} = ${resultado}`;
      tablaResultado.appendChild(fila);
    }
  }
  