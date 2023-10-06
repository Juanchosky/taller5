function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}

function determinarCategoria(imc) {
    if (imc < 18.5) {
        return "peso bajo";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "peso normal";
    } else if (imc >= 24.9 && imc < 30) {
        return "sobrepeso";
    } else {
        return "obesidad";
    }
}

function mostrarIMC() {
    const peso = parseFloat(prompt("Introduce tu peso en kg:"));
    const altura = parseFloat(prompt("Introduce tu altura en metros:"));
    const imc = calcularIMC(peso, altura);
    const categoria = determinarCategoria(imc);
    alert(`Tu IMC es ${imc}, estás en el rango de ${categoria}.`);
}
