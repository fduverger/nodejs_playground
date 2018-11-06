const fs = require('fs');

const readFileAsArray = function(file, cb) {
    fs.readFile(file, function(err, data) {
        if (err) {
            return cb(err);
        }

        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
};

readFileAsArray('./numbers', function(err, lines) {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(function(number){
        return number % 2 == 1;
    });

    console.log( 'odd numbers count:', oddNumbers.length );
});