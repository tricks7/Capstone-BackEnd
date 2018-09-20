var knex = require('./connection')

module.exports = {
  getUsers: function() {
    return knex('users').select()
  },
  getUserById: function(id) {
    return knex('users').select().where('id', id)
  },
  getProductsByUserId: function(id) {
    return knex('products')
      .select('id', 'products')
      .where('user_id', id)
  }
}