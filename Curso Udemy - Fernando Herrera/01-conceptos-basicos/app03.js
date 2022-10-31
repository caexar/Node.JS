console.log("inicio el programa"); // 1

setTimeout(() => {
    console.log(`primer timeout`); //5
}, 3000);

setTimeout(() => {
    console.log(`segundo timeout`); //3
}, 0);

setTimeout(() => {
    console.log(`tercero timeout`); //4
}, 0);

console.log("final del programa"); //2
//el orden de estas depende del cilco de los eventos en node
//primero ejecutara en forma de cascada los console ya que son instantaneo
//segundo los callback se ejecutaran en orden y segun el tiempo de estos, `setTimeout` el menor tiempo antes y en cascada
//segun ese orden se ejecutaran unos primeros q otros