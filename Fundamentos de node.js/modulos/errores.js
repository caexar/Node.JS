/*Errores (Try/Catch)
Cuando se genera un error, node propaga el error hacia arriba, hasta que esta es caputado. si el error no se captura node se detiene.

Siempre que sea posible debemos capturar todos los errores que se puedan generar en nuestros hilos.

<h3>Try/Catch</h3>
Non permite caputar los errores:*/

//-----------------------------------------------------------------------------------------------//
//se rompe sincronica
const { createBrotliCompress } = require("zlib");

//al romperse aca y indicarlo todo sucedera igual
function otroError() {
    seRompe();
}
//ejemplo de funcion que se rompera
function seRompe() {
    //no se puede sumar 3 + z
    return 3 + z;
}
//usaremos try/catch siempre que pensemo que se rompera una funcion para evitar que dañe todo el codigo
try {
    otroError();
} catch (err) {
    //usaremos console.error para dar un mensaje si se detecta un error
    console.error("vaya, algo se a roto...");
    //usaremos console.error(err.mensaje); para idicarle el error al usuario
    console.error(err.message);
    //si usamos el console.error(err); nos indicara todo lo que paso y de donde iicio y de donde paso el error
    console.log("pero no pasa nada lo eos capturado")
}
console.log("este de aqui esta al final");


//-----------------------------------------------------------------------------------------------------------------//

//try/catch para funciones asincronicas
//se rompe la funcion asincronica
function seRompeAsincronica(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.log("error en la funcion asincrona");
            cb(err);
        }
    });
}
//usaremos try/catch siempre que pensemo que se rompera una funcion para evitar que dañe todo el codigo
try {
    //le agregamos el callback etra porq le indicamos en la funcion que tendra
    seRompeAsincronica(function(err) {
        //usaremos el err.mensaje para saber cual fue el error
        console.log(err.message)
    });
} catch (err) {
    //usaremos console.error para dar un mensaje si se detecta un error
    console.error("vaya, algo se a roto...");
    //usaremos console.error(err.mensaje); para idicarle el error al usuario
    console.error(err.message);
    //si usamos el console.error(err); nos indicara todo lo que paso y de donde iicio y de donde paso el error
    console.log("pero no pasa nada lo eos capturado")
}
console.log("este de aqui esta al final");