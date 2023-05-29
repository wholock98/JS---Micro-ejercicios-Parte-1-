// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// Resultado: Escribir entre dos numeros cual es el mayor de ellos

// vincular archivo styles.css con html
// crear la estructura donde vamos a escribir el texto
// desde javascript recuperar el componente
// inyectar el script con la operacion

function compararNumeros() {
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);
    var resultado;
  
    if (numero1 > numero2) {
      resultado = numero1 + ' es mayor que ' + numero2;
    } else if (numero2 > numero1) {
      resultado = numero2 + ' es mayor que ' + numero1;
    } 
  
    document.getElementById('resultado').textContent = resultado;
  }
  