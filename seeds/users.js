var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Restart id sequence with integer 1 MORE than number of seeds (ex. 2 seeds -> restart with 3)
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 3;')
    .then(function () {
      var users = [{
        id: 1,
        username: 'sam',
        password: bcrypt.hashSync('sammyg21', 10)

      }, {
        id: 2,
        username: 'alex',
        password: bcrypt.hashSync('alexmart05', 10)
      }];
      return knex('user').insert(users);
    });
};
