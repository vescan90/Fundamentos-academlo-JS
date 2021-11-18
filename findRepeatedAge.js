function findRepeatedAge(students) {
    let uElementos = [];
    let vecesRepetidas = [];
    let contador = 1;
    let newArray = students.map(e => e.age).sort()
    for (let index = 0; index < newArray.length; index++) {
        if (newArray[index+1] === newArray[index]) {
            contador++;
            
        } else {
            uElementos.push(newArray[index]);
            vecesRepetidas.push(contador);
            contador = 1;
        }
    }
    let masRepeated = Math.max.apply(null,vecesRepetidas);
    let position = vecesRepetidas.indexOf(masRepeated);
    console.log(uElementos[position])
}
findRepeatedAge([ { name: 'Georg', age: 23, }, { name: 'Andrea', age: 23, }, { name: 'Daniela', age: 25, }, { name: 'José', age: 27, } ])