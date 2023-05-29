// Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

//// Resultado: Un input del nombre de usuario y que devuelva el texto Hola mas el nombre del usuario

// vincular archivo styles.css con html
// crear la estructura donde vamos a escribir el texto
// desde javascript recuperar el componente
// inyectar el script con el saludo al usuario


function saludo() {
    var user = document.getElementById('nombre').value;
    var saludo = 'Hola ' + user;
  
    document.getElementById('saludo').textContent = saludo;
  }
  