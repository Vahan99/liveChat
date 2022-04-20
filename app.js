require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const process = require('process');
const app = express();
const routes = require('./routes/index');
const { dbUrl, port } = require('./config/index');

app.use(express.json());
app.use('/', routes);

mongoose.connect(dbUrl,{
  useNewUrlParser: true,
});

mongoose.connection.on("error", err => {
  console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
  console.log("Mongodb connected successfuly: OK")
});

app.listen(port, () => {
  console.log(`App serving on port: ${port}`)
});

process.on('SIGTERM', () => {
  app.close(() => {
    console.log('HTTP server closed')
  })
})
