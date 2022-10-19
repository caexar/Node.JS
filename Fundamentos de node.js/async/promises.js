function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("bla bla bla bla,,,");
            resolve(nombre);
        }, 1000);
    });

}

function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("adios", nombre);
            resolve(nombre);
        }, 1000);
    });

}

//--- ejecucion
console.log("iniciando proceso...");
hola("cesar")
    //forma normal de mostrarlo usando callback
    /*.then((nombre) => {
        return adios(nombre);
    })*/
    //mejor forma usando promises
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("terminado el proceso");
    })
    //cuando sucede un error en el codigo envez de que te mande el monton de letra
    //con este catch te avisara del error y detendra el codigo paq no se extienda
    .catch(error => {
        console.error("ha habido un error:");
        console.error(error);
    })
    //para probar el .catch(error), podemos modificar la promise de resolve a rejact