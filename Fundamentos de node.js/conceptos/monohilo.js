//al ser monohilo y ser asincronica significara que no se ejecutarra en cascada sino que por velocidad. 
//si el programa puede ver que una condicion se puede cumplir de inmediato la priorizara y la que tardara mas la dejara que tarde lo q tarde
console.log('prueba 1ra');
var i = 0;
//el metodo setInterval sirve para repetir una funcion un numero "x" de veces
setInterval(function() {
    console.log(i);
    i++;

}, 1000);
console.log("prueba 2da");
//para ejecutar hay q poner en consola: node carpeta\nombreArchivo.js
//ctr + c apra deneter el procedimiento