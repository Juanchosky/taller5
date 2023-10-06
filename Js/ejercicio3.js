function calcularMedia(numeros) {
  const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  return suma / numeros.length;
}

function calcularMediana(numeros) {
  numeros.sort((a, b) => a - b);

  const mitadArray = Math.floor(numeros.length / 2);

  if (numeros.length % 2 === 0) { 
      return (numeros[mitadArray - 1] + numeros[mitadArray]) / 2;
  } else { 
      return numeros[mitadArray];
  }
}

function calcularDesviacionEstandar(numeros) {
  const media = calcularMedia(numeros);
  const sumaCuadradaDiferencias = numeros.reduce((acumulador, valorActual) => acumulador + Math.pow(valorActual - media, 2), 0);

  return Math.sqrt(sumaCuadradaDiferencias / numeros.length).toFixed(2);
}

function calcularEstadisticas() {
  const entrada = document.getElementById("numeros").value;
  const numeros = entrada.split(",").map(numero => parseFloat(numero.trim()));

  const media = calcularMedia(numeros);
  const mediana = calcularMediana(numeros);
  const desviacionEstandar = calcularDesviacionEstandar(numeros);

  document.getElementById("media").innerText = "Media: " + media;
  document.getElementById("mediana").innerText = "Mediana: " + mediana;
  document.getElementById("desviacionEstandar").innerText = "Desviación Estándar: " + desviacionEstandar;
}
