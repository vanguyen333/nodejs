const EventMitter = require("events");
const uuid = require("uuid"); //uuid create random id
// console.log(uuid.v4());

class Logger extends EventMitter {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;
const logger = new Logger();
logger.on("message", (data) => console.log("Called Listener:", data)); //Called Listener: { id: 'ddea9a48-a961-4e8c-8bc6-7cbc86471666', msg: 'Hello World' }

logger.log("Hello World");
logger.log("Hello Van");
