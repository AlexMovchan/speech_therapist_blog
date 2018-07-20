module.exports = function (app, db) {
  console.log('POST');
  app.post('/posts', (req, res) => {
    console.log(req.body);
    db.collection('posts').insert(req.body, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
