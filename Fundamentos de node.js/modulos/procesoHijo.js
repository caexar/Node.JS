/*EXEC
Nos permite ejecutar cualquier comando en una terminal!
Vamos a usar lago de ES6 que es para desestructurar un objeto, y nmos vamos a traer EXCEC (2 formas)

En linux o mac exec(‘ls -la’, segundo parametro)
En windows exec(‘dir’, segundo parametro)
“spawn” para procesos mas complejos
Nos permite invocar un proceso nuevo de node js.
A diferencia de un exec solo ejecuta un comadno y ya esta a continuacion podemos invocar a procesos mas largos! Invocar un proceso nuevo y empezar a ver que sucede con ese proceso.
Done el resto de parametros deben ir en un array y no como antes
EXEC (‘ls -la’)
SAPWN (‘ls’ , [‘la’])*/

//--------------------------------------------//
//importamos la clase exec
const { exec, spawn } = require("child_process");

//al usar el "dir(windowa)" estamos llamando a todos los archivos de nuestra carpeta "curso Node.js"
//proceso exec
exec("dir", (err, stdount, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdount);
});

//si agregamos en el "dir" la ubicacion de un archivo se ejecutara este, siendo este llamado por esta clase
exec("node modulos/consola.js", (err, stdount, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdount);
});

//----------------------------------------------------------------//
//proceso spawn

let proceso = spawn('dir', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('¿Esta muerto?');
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on('exit', function() {
    console.log('El proceso termino');
    console.log(proceso.killed);
});