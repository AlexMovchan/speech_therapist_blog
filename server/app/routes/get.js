var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  app.get("/notes/:id", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    if (req.params.id !== "all") {
      const id = req.params.id;
      const details = { _id: new ObjectID(id) };
      db.collection("notes").findOne(details, (err, item) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(item);
        }
      });
    } else if (req.params.id === "all") {
      const data = db
        .collection("notes")
        .find({})
        .toArray((error, documents) => {
          if (error) throw error;
          console.log('documents - ', documents)
          res.json(documents);
        });
    }
  });
};
