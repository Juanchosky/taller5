function calcularInteresCompuesto(capitalInicial, tasaInteres, periodo) {
  
  const montoFinal = capitalInicial * Math.pow((1 + tasaInteres / 100), periodo);
  return parseFloat(montoFinal.toFixed(2));
}

function solicitarDatosInteres() {
  const capitalInicial = parseFloat(prompt("Introduce el capital inicial:"));
  const tasaInteres = parseFloat(prompt("Introduce la tasa de interés anual (en %):"));
  const periodo = parseFloat(prompt("Introduce el período de inversión en años:"));

  const montoFinal = calcularInteresCompuesto(capitalInicial, tasaInteres, periodo);
  alert(`El monto final es de $${montoFinal}`);
}
