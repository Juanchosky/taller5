function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales) {
  var caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  var caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeros = '0123456789';
  var especiales = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  varonjuntoCaracteres = caracteresMinusculas;

  if (incluirMayusculas) {
      conjuntoCaracteres += caracteresMayusculas;
  }

  if (incluirNumeros) {
      conjuntoCaracteres += numeros;
  }

  if (incluirEspeciales) {
      conjuntoCaracteres += especiales;
  }

  varontrasena = '';
  for (let i = 0; i < longitud; i++) {
      const indiceRandom = Math.floor(Math.random() * conjuntoCaracteres.length);
      contrasena += conjuntoCaracteres[indiceRandom];
  }

  return contrasena;
}

function solicitarContrasena() {
  var longitud = parseInt(prompt("Introduce la longitud de la contraseña:"));
  var incluirMayusculas = confirm("¿Incluir mayúsculas?");
  var incluirNumeros = confirm("¿Incluir números?");
  var incluirEspeciales = confirm("¿Incluir caracteres especiales?");

  var contrasena = generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales);
  alert(`Tu contraseña generada es: ${contrasena}`);
}
