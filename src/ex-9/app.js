// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

function contarVocales() {
    const frase = document.getElementById("fraseInput").value;
    const vocales = frase.match(/[aeiou]/gi);
    const cantidadVocales = vocales ? vocales.length : 0;
    console.log("Cantidad de vocales: " + cantidadVocales);
  }
  