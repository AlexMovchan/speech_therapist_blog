const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
  // delete
  console.log('delete');
  app.delete('/posts', (req, res) => {
    const id = req.body.id;
    const details = { _id: new ObjectID(id) };
    db.collection('posts').remove(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(`Note ${id} deleted!`);
      }
    });
  });
};
