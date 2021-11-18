
function countStudents(students, countries, countryName) {
    let contador = 0;
    countries.forEach(country => {
        if (country.name == countryName) {
            students.forEach(student => {
                if (student.country_id == country.id) {
                    contador = contador + 1;
                }
            });
        }
    });
    console.log(contador)
    
    }
        

countStudents([ { name: 'Georg', email: 'georg@academlo.com', country_id: 1, }, { name: 'Andrea', email: 'andrea@gmail.com', country_id: 1, }, { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2, } ],
 [ { id: 1, name: 'Mexico', }, { id: 2, name: 'Colombia', } ],'Colombia' ); 