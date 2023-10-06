function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales) {
  const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const especiales = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let conjuntoCaracteres = caracteresMinusculas;

  if (incluirMayusculas) {
      conjuntoCaracteres += caracteresMayusculas;
  }

  if (incluirNumeros) {
      conjuntoCaracteres += numeros;
  }

  if (incluirEspeciales) {
      conjuntoCaracteres += especiales;
  }

  let contrasena = '';
  for (let i = 0; i < longitud; i++) {
      const indiceRandom = Math.floor(Math.random() * conjuntoCaracteres.length);
      contrasena += conjuntoCaracteres[indiceRandom];
  }

  return contrasena;
}

function solicitarContrasena() {
  const longitud = parseInt(prompt("Introduce la longitud de la contraseña:"));
  const incluirMayusculas = confirm("¿Incluir mayúsculas?");
  const incluirNumeros = confirm("¿Incluir números?");
  const incluirEspeciales = confirm("¿Incluir caracteres especiales?");

  const contrasena = generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirEspeciales);
  alert(`Tu contraseña generada es: ${contrasena}`);
}
