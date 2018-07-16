module.exports = function (app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body);
    db.collection('notes').insert(req.body, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
