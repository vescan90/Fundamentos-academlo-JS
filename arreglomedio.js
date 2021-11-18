
function mitadArreglo(arreglo) {
    let division;

    
    let longitudArreglo = arreglo.length;
    if (longitudArreglo % 2 === 0) {
        //Par
        division = longitudArreglo / 2; 
        let indice1 = division - 1;
        let indice2 = indice1 + 1; 
        let arregloPar = [];
        arregloPar.push(arreglo[indice1], arreglo[indice2])
        return arregloPar;
    } else {
        //Impar
        division = (longitudArreglo + 1)/2;
        let indice = division - 1;
        return arreglo[indice];
    }  
}
console.log(mitadArreglo([1,2,3,4,5,6,7,8,9,10,11,12,13]));





