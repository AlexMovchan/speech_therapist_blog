var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  // delete
  app.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("notes").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send("Note " + id + " deleted!");
      }
    });
  });
};
