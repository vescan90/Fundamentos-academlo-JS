function replaceLastWord(frase1, frase2, frase3) {
    let indiceUltimoespacio1 = frase1.lastIndexOf(' ');
    let numero1 = frase1.slice( indiceUltimoespacio1 - 2, indiceUltimoespacio1 + 1);

    let indiceUltimoespacio2 = frase2.lastIndexOf(' ');
    let numero2 = frase2.slice( indiceUltimoespacio2 - 2, indiceUltimoespacio2 + 1);

    let indiceUltimoespacio3 = frase3.lastIndexOf(' ');
    let numero3 = frase3.slice( indiceUltimoespacio3 - 2, indiceUltimoespacio3 + 1);
    
    return parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
    }
console.log(replaceLastWord('tengo 1 años', 'tengo 1 años', 'tengo 1 años'));