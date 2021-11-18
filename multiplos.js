
function sacarMultiplosEnArreglo(number, limit) {

    let multiplo = null;
    const arregloMultiplos = [];
    for (let index = 2; index < limit; index++) {
        multiplo = number * index;
        if (multiplo <= limit) {
            arregloMultiplos.push(multiplo);
        } else {
            continue
        }
    }
    return arregloMultiplos;
}

console.log(sacarMultiplosEnArreglo(9,80));