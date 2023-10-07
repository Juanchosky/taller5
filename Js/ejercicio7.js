function calcularInteresCompuesto(capitalInicial, tasaInteres, periodo) {
  
  var montoFinal = capitalInicial * Math.pow((1 + tasaInteres / 100), periodo);
  return parseFloat(montoFinal.toFixed(2));
}

function solicitarDatosInteres() {
  var capitalInicial = parseFloat(prompt("Introduce el capital inicial:"));
  var tasaInteres = parseFloat(prompt("Introduce la tasa de interés anual (en %):"));
  var periodo = parseFloat(prompt("Introduce el período de inversión en años:"));

  var montoFinal = calcularInteresCompuesto(capitalInicial, tasaInteres, periodo);
  alert(`El monto final es de $${montoFinal}`);
}
