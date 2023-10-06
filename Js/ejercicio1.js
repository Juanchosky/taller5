let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function verificarNumero() {
    const numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    intentos++;

    if (numeroUsuario < numeroAleatorio) {
        document.getElementById("pista").innerText = "Más alto.";
    } else if (numeroUsuario > numeroAleatorio) {
        document.getElementById("pista").innerText = "Más bajo.";
    } else {
        document.getElementById("pista").innerText = `¡Correcto! El número es ${numeroAleatorio} y lo adivinaste en ${intentos} intentos.`;

    }
}
