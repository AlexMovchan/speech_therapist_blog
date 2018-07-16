const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(
  db.url,
  { useNewUrlParser: true },
  (err, database) => {
    if (err) return console.log(err);
    require('./app/routes')(app, database.db('test_db'));
    return app.listen(port, () => {
      console.log(`We are live on ${port}`);
    });
  }
);
