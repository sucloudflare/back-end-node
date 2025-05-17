exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('id');
      table.string('title').notNullable();
      table.text('description');
      table.boolean('done').defaultTo(false);
      table.integer('user_id')
           .unsigned()
           .references('id')
           .inTable('users')
           .onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
  };
  