// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

// Resultado

function contarLetra() {
   
    for (var i = 0; i < frase.length; i++) {
      if (frase.charAt(i) === 'a') {
        contador++;
      }
    }
  
    document.getElementById('resultado').textContent = "La letra 'a' aparece " + contador + " veces en la frase.";
  }
  