function sumEvens(start, end) {
    let suma = 0;
    for (let index = start + 1; index < end; index++) {
        if (index % 2 === 0) {
            suma = suma + index;

        }  
    }
    console.log(suma);
}
sumEvens(20,30);