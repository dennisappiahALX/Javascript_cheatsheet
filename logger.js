const EventEmitter = require('events');

//logger class has access to all methods and function in the EventEmitter
class Logger extends EventEmitter{
    log(message){
        // Send HTTP Request
        console.log(message);
    
        // Raise an event with Event Arguments
        this.emit('messageLogged', {id: 1, url: 'url:/' });
    }
}

module.exports = Logger;
