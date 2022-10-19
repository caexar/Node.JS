/*RESUMEN:

Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales 
como hacer un archivo que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.
Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. 
No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop*/

//se usa la funcion async para que el codigo se vuelva sincronico o en cascada
//esta funcion sera muy util cuando se deba trabajar en un orden especifico

//con solo agregar el "async" ya se volvera sincronica la funcion
async function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("bla bla bla bla,,,");
            resolve(nombre);
        }, 1000);
    });

}

async function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("adios", nombre);
            resolve(nombre);
        }, 1000);
    });

}

//para mostrar en el panel una funcion async se debera hacer uso de este "main" y con ayuda del await para llamarlas
async function main() {
    //se usa el "let nombre = "para declara la variable nombre y asignarle el nombre q se le indica en el await
    let nombre = await hola("cesar");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("terminamos el proceso");
}

console.log("empieza el proceso");
main()
console.log("va a ser la 2da en ejecutarce");
//el codigo al ser sincronico se ejecutara siguiendo el orden y lo q no es sicronico se ejecutara en el tiempo requerido antes o despues