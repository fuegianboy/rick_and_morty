const express = require("express");
const morgan = require("morgan")
const getCharById = require("./controllers/getCharById")
const login = require("./controllers/login")
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const { conn } = require('./DB_connection');


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
server.use(morgan("dev"))
server.use("/rickandmorty", router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);

});





// const http = require("http");
// const getCharById = require("./controllers/getCharById.js")
// const PORT = 3001;

// // import { createServer } from "http";

//   http.createServer( (req, res)=>{ 
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const apa = req.url
//     if (apa.includes("/rickandmorty/character")) {
//       const id = parseInt(apa.slice(-2))
//       getCharById(res, id)
//     }

//   }).listen(PORT,"localhost")