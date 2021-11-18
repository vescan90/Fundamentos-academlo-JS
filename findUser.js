function findUser(users, key, value) {
    for (let index = 0; index < users.length; index++) {
        let element = users[index];
        
        if (users[index][key] === value) {
            return element;
        }
    } 
}
console.log(findUser([ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ],'age', 22));