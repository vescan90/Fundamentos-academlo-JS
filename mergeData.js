function mergeData(users, attendance) {
    
    for (let index = 0; index < users.length; index++) {
        
        for (let index2 = 0; index2 < attendance.length; index2++) {
            
            if (users[index].email === attendance[index2].email) {
                users[index].attendance = attendance[index2].attendance;
            }
        } 
    }
    return users;       
    }

console.log(mergeData([ { name: 'Georg', email: 'georg@academlo.com', }, { name: 'Andrea', email: 'andrea@gmail.com', } ], [ { email: 'georg@academlo.com', attendance: true }, { email: 'andrea@gmail.com', attendance: false } ]))