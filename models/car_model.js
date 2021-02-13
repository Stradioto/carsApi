const db = require('../database');

const car = {
  get: function(callback) {
    return db.query('select * from car order by idcar desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into book (brand,model,yearmodel) values(?,?,?)',
      [car.brand, car.model, car.yearmodel],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from book where idcar=?', [id], callback);
  },
  update: function(id, book, callback) {
    return db.query(
      'update book set brand=?,model=?, yearmodel=? where idcark=?',
      [car.brand, car.model, car.yearmodel, id],
      callback
    );
  }
};
module.exports = car;