const http = require("http"); // node.js has been installed

const hostname = "127.0.0.1"; //===localhost
const port = 3000;

//create server website
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n vandev fullstack");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
