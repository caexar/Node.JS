//con process.env.el "NOMBRE" para que sea variable de etorno que dara el sistema o el servidor
let nombre = process.env.NOMBRE || 'sinotengo nombre';
let web = process.env.WEB || 'no tengo web';

//para definir una variable antes hay q ingresarla por consola de esta forma
//$env:NOMBRE="Cesar"
//$env:WEB="miweb.com"
//luego se ejecuta el coando normal node conceptos/entorno.js si se usa terminal con git bash es todo junto

//imprimira la variable de entorno que le da el usuario
console.log('hola ' + nombre);
console.log('mi web es' + web);
//para tener buenas practica siempre pondremos las variable de entorno en mayuscula
// VARIABLE o VARIABLE_MAY