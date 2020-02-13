
const EventEmitter = require('events'); //class
//const emitter = new EventEmmiter(); //object

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('GayStuff', (arg) => {//e, eventArg
    console.log('Listener called: ', arg);
})

logger.log('Gayyy');