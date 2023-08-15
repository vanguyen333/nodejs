// import express from "express";

// import bodyParser from "body-parser"; //take in incomming post request body

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());

// app.listen(PORT, () =>
//   console.log(`Server running on port: http://localhost:${PORT}`)
// );

import express, { json } from "express";

const app = express();
const PORT = 5000;

app.use(json()); // Built-in middleware for parsing JSON
app.get("/", (req, res) => {
  console.log("[TEST");
  res.send("Hello from Homepage.");
});
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
