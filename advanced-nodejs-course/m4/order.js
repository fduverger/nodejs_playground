const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('data', (data) => {
    console.log(`Length: ${data.length}`);
});

withTime.prependListener('data', (data) => {
    console.log(`Characters: ${data.toString().length}`);
});

withTime.execute(fs.readFile, __filename);