function countStudents(students, countries, countryName) {
    let contador = 0;
    for (let index = 0; index < countries.length; index++) {
        if (countries[index].name == countryName) {
            for (let index2 = 0; index2 < students.length; index2++) {
                if (students[index2].country_id === countries[index].id) {
                    contador++;
                }
            }
        }
    }
        
        console.log(contador)
    
    }
        
        
    

countStudents([ { name: 'Georg', email: 'georg@academlo.com', country_id: 1, }, { name: 'Andrea', email: 'andrea@gmail.com', country_id: 1, }, { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2, } ],
 [ { id: 1, name: 'Mexico', }, { id: 2, name: 'Colombia', } ],'Colombia' ); 