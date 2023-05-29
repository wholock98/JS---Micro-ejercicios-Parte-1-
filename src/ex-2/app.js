// Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.

// Resultado: Mostrar la suma de 3 + 5


// vincular archivo styles.css con html
// crear la estructura donde vamos a escribir el texto
// desde javascript recuperar el componente
// inyectar el script con el calculo 

var num1 = 3;
var num2 = 5;
var resultado = num1 + num2;

document.getElementById('resultado').textContent = 'La suma de ' + num1 + ' + ' + num2 + ' es ' + resultado;
