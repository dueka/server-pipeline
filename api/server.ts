const express = require('express');
const {ApolloServer, gql} = require("apollo-server-express");
const dotenv = require('dotenv');
const cors = require("cors");
const morgan = require('morgan');
const winstonlog = require('../config/winston')

dotenv.config();
const routes = require("../routes")
const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan('combined', { stream: winstonlog.stream }));




app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    winstonlog.error(
      `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
        req.method
      } - ${req.ip}`
    );
  
    res.status(err.status || 500);
    res.render('error');
    next();
  });
  
  app.use('/api', routes)
  app.get('/', (req, res) => {
    res.status(200).json({
      status: 200,
      message: 'Hello from pipeline backend!'
    });
  });
  
  app.get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: 'Invalid route!'
    });
  });
  
  module.exports = app;
  