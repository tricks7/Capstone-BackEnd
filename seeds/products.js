
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM products; ALTER SEQUENCE users_id_seq RESTART WITH 4;')
    .then(function () {
      return knex('products').insert([
        {id: 1, username: 'thtth', users_id: 1},
        {id: 2, username: 'egergerg', users_id: 2},
        {id: 3, username: 'dfbdfbd', users_id: 1},
      ])
    });
};