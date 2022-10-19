/*Console
Con console podemos imprimir todo tipo de valores por
nuestra terminal.

console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.*/


// para mostrar algo
console.log("algo")
    //para mosstrar la informacion
console.info("algo")
    //para guarda la deteccion de un error
console.error("error")
    //para un potencial error
console.warn("casi error")
    //mostrara datos en forma de modulos(tabla)
console.table(tabla)
var tabla = [{
        a: 1,
        b: "z"
    }, {
        a: 2,
        b: "otra"
    }]
    //normalmente quedaria fea [{a:1, b:"z"}, {a:2 b:"otra"}]
console.log(tabla)
    //mostrara una tabla chula
console.table(tabla)

//mostrar comversacion o .log dentro de un grupo
console.group("conversacion");
//todo los console.log que esten por debajo del .group seran sub de este
console.log("mensaje 1");
console.log("mensaje 2");
console.log("mensaje 3");
console.groupEnd("conversacion");
console.log("algo random al final");

// console.clear()
// Límpia la consola
function limpiarConsola() {
    setTimeout(() => {
        console.clear("Limpiando cada 5 segs");
    }, 10000)
}
limpiarConsola();

// console.count() & console.countReset()
// Cuenta la cantidad de veces que se ejecuta algo y countReset() resetea el contador
console.count("Veces");
//+1
console.count("Veces");
//+2
console.countReset("Veces");
//+1
console.count("Veces");
//+2
console.count("Veces");
//+3

// console.time() & console.timeEnd()
// determina el tiempo que demora un proceso en ocurrir y detiene el tiempo
console.time("100-elementos")
for (let i = 0; i < 100; i++) {};
console.timeEnd("100-elementos")