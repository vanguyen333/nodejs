require("dotenv").config(); //cpmmon js
const express = require("express"); //import express, commonjs

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); //create express application
const port = process.env.PORT || 8888; // init port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai bao routes
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
