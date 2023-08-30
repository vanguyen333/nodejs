const EventMitter = require("events");
const uuid = require("uuid"); //uuid create random id
// console.log(uuid.v4());

class Logger extends EventMitter {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
