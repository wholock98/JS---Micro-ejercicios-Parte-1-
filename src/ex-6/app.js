// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// Resultado: Mostrar por pantalla el numero mayor de 3 

// vincular archivo styles.css con html
// crear la estructura donde vamos a escribir el texto
// desde javascript recuperar el componente
// inyectar el script con la operacion

function obtenerMayor() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var numero3 = parseFloat(document.getElementById('numero3').value);
    var mayor;
  
    if (numero1 >= numero2 && numero1 >= numero3) {
      mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
      mayor = numero2;
    } else {
      mayor = numero3;
    }
  
    document.getElementById('resultado').textContent = 'El número mayor es: ' + mayor;
  }
  