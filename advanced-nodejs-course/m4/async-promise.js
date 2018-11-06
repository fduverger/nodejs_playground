const fs = require('fs');

const readFileAsArray = (file, cb = () => {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);  
                return cb(err);
            } 

            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        });
    });
};

readFileAsArray('./numbers')
.then((lines) => {
    const numbers = lines.map(Number);

    const oddNumbers = numbers.filter((number) => {
        return number % 2 == 1;
    });

    console.log('odd numbers count:', oddNumbers.length);
})
.catch(console.error);

readFileAsArray('./numbers', function(err, lines) {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(function(number){
        return number % 2 == 1;
    });

    console.log( 'odd numbers count:', oddNumbers.length );
});

async function countOdd() {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter((number) => { return number % 2 == 1 });

        console.log( 'odd numbers count:', oddNumbers.length );
    } catch (error) {
        console.log(error);
    }
}

countOdd();