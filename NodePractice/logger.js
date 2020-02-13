//console.log(__filename);
//console,log(__dirname);
const EventEmitter = require('events'); //class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){ //function in a class = method
        // send an HTTP request
        console.log(message);

        //Raising an event
        this.emit('GayStuff', { id: 1, url: 'http//'});
    }
}
    
    module.exports = Logger;

