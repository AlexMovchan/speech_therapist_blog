const get = require("./get");
const post = require("./post");
const del = require("./del");
const put = require("./put");

module.exports = function(app, db) {
  get(app, db);
  post(app, db);
  del(app, db);
  put(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
