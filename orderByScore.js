function orderUsersByScore(users) {
    
        console.log(users.sort(function  compareNumbers(a, b) {
            return a.score - b.score;
        }))
}
console.log(orderUsersByScore([ { name: 'Georg', email: 'georg@academlo.com', score: 100 }, { name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, { name: 'Andrés', email: 'andres@gmail.com', score: 34 } ]))
