function deleteUser(users, email) {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        
        if (element.email === email) {
            let indice = users.indexOf(element);
            users.splice(indice, 1);
            return users
        }
        
    }
}
console.log(deleteUser(users = [ { name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ], email = 'georg@academlo.com'));