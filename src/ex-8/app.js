// Escribe un programa que pida una frase y escriba las vocales que aparecen

// Resultado: Mostrar las vocales de una frase

function mostrarVocales() {
    const frase = document.getElementById("fraseInput").value;
    const vocales = frase.match(/[aeiou]/gi);
    console.log(vocales);
  }
  
