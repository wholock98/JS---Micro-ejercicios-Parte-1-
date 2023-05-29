// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

// Resultado: Escribir la suma de la variable num1 + num2 = resultado


// vincular archivo styles.css con html
// crear la estructura donde vamos a escribir el texto
// desde javascript recuperar el componente
// inyectar el script con el texto y la suma deseada

function calcularSuma() {
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);
    var resultado = numero1 + numero2;
  
    var mensaje = 'La suma de ' + numero1 + ' con ' + numero2 + ' es ' + resultado;
    document.getElementById('resultado').textContent = mensaje;
  }
  