# nodejs

https://www.youtube.com/watch?v=fBNz5xF-Kx4
Nodejs Crash course
Node JS is JavaScript Runtime, not a language or framework
built on the V8 JavaScript engine (same on Google Chrome)
Written in C++
Essentially allows us to run JavaScript code on the server

non-blocking I/O model, event driven
fast, efficient, highly scalable
non-blocking I/O model:

- works on a single thread using non-bloking I/O calls,
- Supports tens of thousands concurrent connections
- Optimizes throughput & scalablity in apps with many I/O operations
- All of this makes Node.js apps very fast and efficent
- Single threaded
- Supports concurrency via events & callbacks
- EventEmitter class is used to bind events and listeners

\*\*Best types of projects for Node

- REST API and Microservices
- Real Time Services (Chat, Live Updates)
- CRUD Apps - Blogs, Shopping Carts, Social Networks
- Tools and Utilities
- Anything that is not CPU intensive

\*\* Npm : Node package manager

- install 3rd party packages (frameworks, libraries, tools, etc)
- packages get stored in the node_modules folder
- all dependencies are listed in a package.json file
- npm scripts can be created to run certain tasks such as run a server

npm init //generates a package.json file
npm i express // installs a package locally
npm i -g nodemon // installs a pcakage globally
npm i uuid // install node_modules, package-lock.json

npm i -D nodemon

\*\* Node MOdules

- NOde Core Modules (path, fs, http, etc)
- 3rd party modules/packages installed via npm
- Custom modules (files)

const path = require(`path`);
const myFile = require(`./myFile`)
