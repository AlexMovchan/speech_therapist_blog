const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
  // update
  console.log('PUT');
  app.put('/posts/:id', (req, res) => {
    const id = req.body._id;
    const details = { _id: new ObjectID(id) };

    const note = { name: req.body.name, surname: req.body.surname };
    db.collection('posts').update(details, note, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(req.body);
      }
    });
  });
};
