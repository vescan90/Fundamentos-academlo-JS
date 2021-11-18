function getEmails(users) {
    let arreglo = [];
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        let correo = element.email;
        arreglo.push(correo);
    }
    return arreglo;
}
console.log(getEmails([ { name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }, { name: 'Georg', email: 'georg@academlo.com', gender: 'Male' } ]));