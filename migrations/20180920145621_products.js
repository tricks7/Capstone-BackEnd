
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', (table) =>{
    table.increments();
    table.text('username').notNullable().unique();
    table.integer('quantity').notNullable();
    table.text('img_url').notNullable();
    table.integer('users_Id').references('users.id').unsigned().onDelete('cascade')
    })
  };
    
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products');
  }; 