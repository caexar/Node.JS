/*RESUMEN:

El file system provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.
Para ver más sobre la documentación de FileSystem:
FileSystem Docs*/

//Fs =  file sistem o archivos
const fs = require("fs");

//metodo leer archivo de txt
function leer(ruta, callback) {
    //la funcion readFile sirve pa leer el archivo txt dado
    fs.readFile(ruta, (err, data) => {
        //al data.toString se le agrega el toString para que al momento de leer el archivo no lo de en string o texto
        callback(data.toString());
    })
}

//metodo escribir en un txt
function escribir(ruta, contenido, callback) {
    //el metodo writeFile sirve para escribir en un txt
    fs.writeFile(ruta, contenido, function(err) {
        //se crea un if(err) para comprobar si se escribe en el archivo
        if (err) {
            console.error("no he podido escribirlo", err);
        } else {
            console.log("se ha escrito correctamente");
        }
    });
}

//metodo para borrar el enlace o un txt
function borrar(ruta, callback) {
    //la funcion unlink sirve para quitar el nelace y borrar un arhivo txt
    fs.unlink(ruta, callback);
}

//para la prueba usamos el global de __dirname para ubicarnos en el archivo actual y el + "/archivo" para salir y buscar el arhcivo a usar
//llenaremos los parametros que nos indican ruta = __dirname + "/archivo.txt" - contenido "String" - Callback osea console.log
leer(__dirname + "/archivo.txt", console.log);
//en cuyo caso el archivo .txt no exita este sera creado
escribir(__dirname + "/archivo1.txt", "soy un archivo reNuevo", console.log);
borrar(__dirname + "/archivo1.txt", console.log)