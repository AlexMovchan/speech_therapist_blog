const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
  console.log('GET');
  app.get('/posts/:id', (req, res) => {
    if (req.params.id !== 'all') {
      const id = req.params.id;
      const details = { _id: new ObjectID(id) };
      db.collection('posts').findOne(details, (err, item) => {
        if (err) {
          res.send({ error: 'An error has occurred' });
        } else {
          res.send(item);
        }
      });
    } else if (req.params.id === 'all') {
      const data = db
        .collection('posts')
        .find({})
        .toArray((error, documents) => {
          if (error) throw error;
          res.json(documents);
        });
    }
  });
};
