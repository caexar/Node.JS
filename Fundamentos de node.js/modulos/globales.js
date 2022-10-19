/*RESUMEN:

Los modulos globales son módulos del core.
Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor está caído o no.

TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas*/
let i = 0;
let intervalo = setInterval(function() {
    console.log("hola");
    if (i === 3) {
        //clearInterval es para romper o cortar el intervalo
        clearInterval(intervalo);
    }
    i++;

}, 1000);

//los setImmediate son "globales" que se ejecutaran inmediatamente
setImmediate(function() {
    console.log("soy inmediato 7w7");
});

// todos los procesos
console.log(process);
//para ver nuestro directorio/ubicacion del archivo
console.log(__dirname);
//ver el nombre del archivo en uso
console.log(__filename);
//crearmos variables gobales 
//* no usar si no es necesario porque da mucho problemas
global.miVariable = "miVariable";
console.log(miVariable);