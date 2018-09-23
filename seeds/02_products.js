
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM products; ALTER SEQUENCE users_id_seq RESTART WITH 3;')
    .then(function () {
      return knex('products').insert([
        {id: 1, username: 'thtth', quantity: 1, img_url: 'https://www.google.com/', users_Id: 1},
        {id: 2, username: 'egergerg', quantity: 2, img_url: 'https://www.google.com/', users_Id: 1},
      ])
    });
};