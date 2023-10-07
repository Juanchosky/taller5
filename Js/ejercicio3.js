function calcularMedia(numeros) {
  var suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  return suma / numeros.length;
}

function calcularMediana(numeros) {
  numeros.sort((a, b) => a - b);

  var mitadArray = Math.floor(numeros.length / 2);

  if (numeros.length % 2 === 0) { 
      return (numeros[mitadArray - 1] + numeros[mitadArray]) / 2;
  } else { 
      return numeros[mitadArray];
  }
}

function calcularDesviacionEstandar(numeros) {
  var media = calcularMedia(numeros);
  var sumaCuadradaDiferencias = numeros.reduce((acumulador, valorActual) => acumulador + Math.pow(valorActual - media, 2), 0);

  return Math.sqrt(sumaCuadradaDiferencias / numeros.length).toFixed(2);
}

function calcularEstadisticas() {
  var entrada = document.getElementById("numeros").value;
  var numeros = entrada.split(",").map(numero => parseFloat(numero.trim()));

  var media = calcularMedia(numeros);
  var mediana = calcularMediana(numeros);
  var desviacionEstandar = calcularDesviacionEstandar(numeros);

  document.getElementById("media").innerText = "Media: " + media;
  document.getElementById("mediana").innerText = "Mediana: " + mediana;
  document.getElementById("desviacionEstandar").innerText = "Desviación Estándar: " + desviacionEstandar;
}
