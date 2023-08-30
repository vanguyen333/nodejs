const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

//create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File Written to...");
  }
);
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I love Node.js!",
  (err) => {
    if (err) throw err;
    console.log("File Written to...");
  }
);
