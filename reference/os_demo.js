const os = require("os");

//Platform
console.log(os.platform()); //win32 for window

//CPU architecture
console.log(os.arch()); //x64

// CPU Core Info
// console.log(os.cpus());

// Free memory
console.log(os.freemem()); //6588276736
console.log(os.totalmem()); //16542011392

//Home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());
